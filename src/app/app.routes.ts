import { Routes } from '@angular/router';
import { CounterPageCompornent } from './pages/counter/counter-page.component';
import { HeroComponent } from './pages/hero/hero.component';
import { DragonballComponent } from './pages/dragonball/dragonball.component';
import { DragonballSuperComponent } from './pages/dragonball-super/dragonball-super.component';

export const routes: Routes = [
  {
     path: '',
    component: CounterPageCompornent
   },

  {
    path: 'hero',
    component: HeroComponent
  },

  {
    path: 'dragonball',
    component: DragonballComponent
  },

  {
    path: 'dragonball-super',
    component: DragonballSuperComponent
  },

  {
    path: '**',
    redirectTo: ''
  },



];
