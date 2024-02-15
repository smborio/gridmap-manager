import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddCharacterService {
  private characterNames: string[] = []; // This list is managed within the service

  constructor() { }

  // Method to add a new character name to the list
  addCharacterName(name: string): void {
    this.characterNames.push(name);
  }

  // Method to get the current list of character names
  getCharacterNames(): string[] {
    return this.characterNames;
  }

  // Method to rotate the list of character names
  rotateCharacterName(): void {
    if (this.characterNames.length > 1) {
      const firstCharacter = this.characterNames.shift(); 
      if (firstCharacter !== undefined) {
        this.characterNames.push(firstCharacter); 
      }
    }
  }
}
