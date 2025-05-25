import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapulationSecondComponent } from './encapulation-second.component';

describe('EncapulationSecondComponent', () => {
  let component: EncapulationSecondComponent;
  let fixture: ComponentFixture<EncapulationSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncapulationSecondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncapulationSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
