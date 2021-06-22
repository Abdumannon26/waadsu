import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-led-backpack',
  templateUrl: './led-backpack.component.html',
  styleUrls: ['./led-backpack.component.scss']
})
export class LedBackpackComponent implements OnInit {
  isOpenLangMenu: boolean | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
