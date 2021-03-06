import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoInstructionComponent } from './video-instruction.component';

describe('VideoInstructionComponent', () => {
  let component: VideoInstructionComponent;
  let fixture: ComponentFixture<VideoInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoInstructionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
