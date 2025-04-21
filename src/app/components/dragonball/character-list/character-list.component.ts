import { Component, input,  } from '@angular/core';
import type { Characters } from '../../../interfaces/character.interdace';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',

})
export class CharacterListComponent {

characters = input.required<Characters[]>()
listName = input.required<string>()

}
