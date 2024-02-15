import { Component, OnInit } from '@angular/core';
import { AddCharacterService } from 'src/app/services/add-character.service';

@Component({
  selector: 'app-top-middle',
  templateUrl: './top-middle.component.html',
  styleUrls: ['./top-middle.component.scss']
})
export class TopMiddleComponent implements OnInit {

  constructor(private addCharacterService: AddCharacterService) { }

  ngOnInit(): void {
  }

  nextCharacter(): void {
    this.addCharacterService.rotateCharacterName();
  }

}
