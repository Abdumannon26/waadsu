import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isOpenLangMenu: boolean | undefined;


  imageObject: Array<object> = [{
    image: 'assets/img/slider1.png',
    thumbImage: 'assets/img/slider1.png',
  }, {
    image: 'assets/img/slider2.png',
    thumbImage: 'assets/img/slider2.png',
  },{
    image: 'assets/img/slider1.png',
    thumbImage: 'assets/img/slider1.png',
  },{
    image: 'assets/img/slider2.png',
    thumbImage: 'assets/img/slider2.png',
  },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
