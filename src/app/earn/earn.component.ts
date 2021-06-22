import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-earn',
  templateUrl: './earn.component.html',
  styleUrls: ['./earn.component.scss']
})
export class EarnComponent implements OnInit {
  isOpenLangMenu: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
