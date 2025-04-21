import { Component, output, signal } from '@angular/core';
import { Characters } from '../../../interfaces/character.interdace';

@Component({
  selector: 'dragoball-character-add',
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);

  newCharracter = output<Characters>();

  addCharacter(){
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    const newCharacter: Characters = {
      id: Math.floor(Math.random() + 1000),
      name: this.name(),
      power: this.power(),
    };
    // this.characters.update((list) => [...list, newCharacter]);
    this.newCharracter.emit(newCharacter);
    this.resetFields();

  }
  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}
