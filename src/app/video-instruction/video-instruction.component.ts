import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-instruction',
  templateUrl: './video-instruction.component.html',
  styleUrls: ['./video-instruction.component.scss']
})
export class VideoInstructionComponent implements OnInit {
  isOpenLangMenu: boolean | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
