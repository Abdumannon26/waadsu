import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedBackpackComponent } from './led-backpack.component';

describe('LedBackpackComponent', () => {
  let component: LedBackpackComponent;
  let fixture: ComponentFixture<LedBackpackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedBackpackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LedBackpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
