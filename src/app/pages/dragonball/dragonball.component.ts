import { Component, signal } from '@angular/core';

interface Characters{
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  // imports: [NgClass],
  templateUrl: './dragonball.component.html',

})
export class DragonballComponent {
  name = signal('');
  power = signal(0);

characters = signal<Characters[]>([

  {id: 1, name: 'goku', power: 9001},
  {id: 2, name: 'vegeta', power: 9003},
  // {id: 3, name: 'picolo', power: 6000},
  // {id: 4, name: 'gohan', power: 3000},
  // {id: 5, name: 'krilin', power: 2500},
  // {id: 6, name: 'Yamcha', power: 700}
]);

addCharacter(){
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    const newCharacter: Characters = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };
    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }
  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}
