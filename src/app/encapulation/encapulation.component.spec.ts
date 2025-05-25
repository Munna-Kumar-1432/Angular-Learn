import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapulationComponent } from './encapulation.component';

describe('EncapulationComponent', () => {
  let component: EncapulationComponent;
  let fixture: ComponentFixture<EncapulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncapulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncapulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
