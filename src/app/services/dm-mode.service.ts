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
    if (!this.dmMode) {
      const passcode = prompt('Enter passcode to switch to DM Mode:');
      if (passcode === '1234') {
        this.dmMode = !this.dmMode;
      } else {
        alert('Incorrect passcode.');
      }
    } else {
      this.dmMode = !this.dmMode; // Toggle directly if dmMode is already true
    }
  }
}
