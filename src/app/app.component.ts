import { Component, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isOpenLangMenu: boolean | undefined;
  title = 'WAADSU';


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

}
