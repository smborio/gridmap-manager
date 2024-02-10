import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DmModeService {
  private dmMode: boolean = false;

  constructor() { }

  // Method to get the current state of dmMode
  getDmMode(): boolean {
    return this.dmMode;
  }

  // Method to toggle the state of dmMode
  toggleDmMode(): void {
    this.dmMode = !this.dmMode;
  }
}
