import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdCardComponent } from './od-card.component';

describe('OdCardComponent', () => {
  let component: OdCardComponent;
  let fixture: ComponentFixture<OdCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
