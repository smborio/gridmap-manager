import { Component, OnInit } from '@angular/core';
import { AddCharacterService } from 'src/app/services/add-character.service';

@Component({
  selector: 'app-bottom-right',
  templateUrl: './bottom-right.component.html',
  styleUrls: ['./bottom-right.component.scss']
})
export class BottomRightComponent implements OnInit {
  characterNames: string[] = [];

  constructor(private addCharacterService: AddCharacterService) { }

  ngOnInit(): void {
    this.characterNames = this.addCharacterService.getCharacterNames();
  }
}
