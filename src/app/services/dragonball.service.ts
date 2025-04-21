
import { effect, Injectable, signal } from '@angular/core';
import { Characters } from '../interfaces/character.interdace';

const loadFromLocalStorage = (): Characters[] => {

  const characters = localStorage.getItem('character');
  return characters ?  JSON.parse(characters): [];

}

@Injectable({providedIn: 'root'})
export class DragonballService {

  characters = signal<Characters[]>(loadFromLocalStorage());

  seveToLocalStorage = effect( () => {

    localStorage.setItem('character', JSON.stringify( this.characters()))
  })


  addCharacter(newCharacter: Characters){
      this.characters.update((list) => [...list, newCharacter])

    }

}
