import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifsService } from 'src/app/gifs/services/gifs.service';

interface MenuOption {
  icon: string;
  label: string;
  route: string;
  subLabeL: string;

}


@Component({
  selector: 'gifs-side-menu-options',
  imports: [
    RouterLink, RouterLinkActive
  ],
  templateUrl: './gifs-side-menu-options.component.html',

})
export class GifsSideMenuOptionsComponent {

  gifsService = inject(GifsService)


  menuOption: MenuOption[] = [
    {
    icon: 'fa-solid fa-chart-line',
    label: 'Trending',
    subLabeL: 'Gifs Populares',
    route: '/dashboard/trendig'
   },

    {
    icon: 'fa-solid fa-magnifying-glass',
    label: 'Buscador',
    subLabeL: 'Buscar Gifs',
    route: '/dashboard/search'
   },

]


 }
