import { Component, computed, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  templateUrl: './hero.component.html',
  imports: [
    UpperCasePipe
  ]

})

export class HeroComponent {
  constructor() { }

  name = signal ('Ironman')
  age = signal(45)


  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;

    return description
  })

  Capitalizado = computed(() => {
    return this.name().toUpperCase();
  })


  changeHero() {
    this.name.set('Spiderman')
    this.age.set(22)
  }

  resetForm(){
    this.name.set('Ironman')
    this.age.set(45)
  }

  chageAge(){
  this.age.set(60)

  }

}
