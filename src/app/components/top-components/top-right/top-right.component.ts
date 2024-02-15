import { Component, OnInit } from '@angular/core';
import { AddCharacterService } from 'src/app/services/add-character.service';

@Component({
  selector: 'app-top-right',
  templateUrl: './top-right.component.html',
  styleUrls: ['./top-right.component.scss']
})
export class TopRightComponent {
  characterName: string = '';

  constructor(private addCharacterService: AddCharacterService) { }

  addCharacter(): void {
    if (this.characterName.trim()) {
      this.addCharacterService.addCharacterName(this.characterName);
      this.characterName = ''; // Clear the input field after adding
    }
  }
}
