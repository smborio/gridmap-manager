import { Component, OnInit } from '@angular/core';
import { DmModeService } from 'src/app/services/dm-mode.service';

@Component({
  selector: 'app-top-left',
  templateUrl: './top-left.component.html',
  styleUrls: ['./top-left.component.scss']
})
export class TopLeftComponent implements OnInit {

  constructor(public dmModeService: DmModeService) { }
  toggleMode(): void {
    this.dmModeService.toggleDmMode();
  }

  ngOnInit(): void {
  }

}
