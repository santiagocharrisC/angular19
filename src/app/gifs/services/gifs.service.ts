import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GifsApp } from '../interface/gifsApp.interfeces';
import { Gif } from '../interface/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, Observable, tap} from 'rxjs';

const GIF_KEY = 'history';

const loadFromLocalStorage = () => {
  const gifsFromLocalStorage = localStorage.getItem(GIF_KEY) ?? '{}';
  const gifs = JSON.parse(gifsFromLocalStorage);
  return gifs;
}


@Injectable({providedIn: 'root'})
export class GifsService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(false);

  private trendingPage = signal(0);



  trendingGifGroup =  computed<Gif[][]> (() => {
    const groups = [];

    for(let i = 0; i < this.trendingGifs().length; i += 3) {
      groups.push(this.trendingGifs().slice(i, i + 3) );
    }

    return groups;
  });

  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage())
  searchhistoryKeys = computed(() => Object.keys(this.searchHistory()));



  constructor() {
    this.loadTrendingGifs();
  }

  saverGifsLocalStorage = effect(() =>{
    const historyGif = JSON.stringify(this.searchHistory())
    localStorage.setItem(GIF_KEY, historyGif)
  })


  loadTrendingGifs(){

      if(this.trendingGifsLoading())return;
      this.trendingGifsLoading.set(true);

      this.http.get<GifsApp>(`${environment.gifsUrl}/gifs/trending`, {
        params: {
          api_key:environment.GifsapiKey,
          limit: 25,
          offset: this.trendingPage() * 25,
        }
      }).subscribe( (resp) => {
          const gifs = GifMapper.mapGifItemsToGifArray(resp.data);
          this.trendingPage.update((page) => page +1)
          this.trendingGifs.update((currentgifs) => [
            ...currentgifs,
            ...gifs
          ]);
          this.trendingGifsLoading.set(false);
      } )
  }

  searchGifs(query: string): Observable<Gif[]> {
   return this.http.get<GifsApp>(`${environment.gifsUrl}/gifs/search`, {
      params:{
        api_key:environment.GifsapiKey,
        limit: 25,
        q: query
      }
    })
    .pipe(
      map(({data}) => data),
      map((items) => GifMapper.mapGifItemsToGifArray(items)),

      //Historial
      tap(items => {
        this.searchHistory.update(history => ({
            ...history,
            [query.toLowerCase()]: items,
        }))
      })
    )
  }
    getHistoryGifs(query: string): Gif[] {
      return this.searchHistory()[query] ?? [];
    }


}
