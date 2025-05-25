import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreserveWhitespaceComponent } from './preserve-whitespace.component';

describe('PreserveWhitespaceComponent', () => {
  let component: PreserveWhitespaceComponent;
  let fixture: ComponentFixture<PreserveWhitespaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreserveWhitespaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreserveWhitespaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
