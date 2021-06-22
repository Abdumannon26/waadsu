import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NgImageSliderModule } from 'ng-image-slider';
import { AdvertiserComponent } from './advertiser/advertiser.component';
import { VideoInstructionComponent } from './video-instruction/video-instruction.component';
import { LedBackpackComponent } from './led-backpack/led-backpack.component';
import { EarnComponent } from './earn/earn.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvertiserComponent,
    VideoInstructionComponent,
    LedBackpackComponent,
    EarnComponent
  ],
  imports: [
    BrowserModule,
    NgImageSliderModule,
    RouterModule.forRoot([
      {
        path: '', component: AppComponent, children: [
          {
            path: 'advertiser', loadChildren: () => import('./advertiser/advertiser.module')
              .then(m => m.AdvertiserModule)
          },
          {
            path: 'led-backpack', loadChildren: () => import('./led-backpack/led-backpack.module')
              .then(m => m.LedBackpackModule)
          },
          {
            path: 'video-instruction', loadChildren: () => import('./video-instruction/video-instruction.module')
              .then(m => m.VideoInstructionModule)
          },
        ]
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
