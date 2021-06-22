import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LedBackpackComponent } from './led-backpack.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: LedBackpackComponent}
    ]),
  ]
})
export class LedBackpackModule { }
