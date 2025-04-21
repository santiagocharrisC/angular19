import { Component, inject } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../dragonball/character-add/character-add.component";
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'dragonball-super',
  templateUrl: './dragonball-super.component.html',
  imports: [CharacterListComponent, CharacterAddComponent],

})
export class DragonballSuperComponent {

public dragonballservice = inject(DragonballService)


}
