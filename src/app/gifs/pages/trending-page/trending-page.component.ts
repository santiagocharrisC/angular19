import { AfterViewInit, Component,ElementRef,inject,viewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { ScrollStateService } from 'src/app/shared/services/scroll-state.service';


@Component({
  selector: 'app-trending-page',
  templateUrl: './trending-page.component.html',

})
export default class TrendingPageComponent implements AfterViewInit {
  gifService = inject(GifsService)
  scrollService = inject(ScrollStateService)

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('grouDiv')

  ngAfterViewInit(): void {
    const scorllDiv = this.scrollDivRef()?.nativeElement;
    if(!scorllDiv) return;

    scorllDiv.scrollTop = this.scrollService.trendingScrollState();
  }

  onScroll(event: Event){
    const scorllDiv = this.scrollDivRef()?.nativeElement;
    if(!scorllDiv) return;

    const scrollTop = scorllDiv.scrollTop;
    const clientHeiht = scorllDiv.clientHeight
    const scrollHeight = scorllDiv.scrollHeight

    ///console.log({scrollTotal: scrollTop + clientHeiht, scrollHeight})
    const isAtBottom = scrollTop + clientHeiht + 300 >= scrollHeight;

    this.scrollService.trendingScrollState.set(scrollTop);

    if(isAtBottom){
      this.gifService.loadTrendingGifs();
    }

  }
}
