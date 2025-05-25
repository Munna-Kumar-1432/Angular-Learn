import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostLisnerComponent } from './host-lisner.component';

describe('HostLisnerComponent', () => {
  let component: HostLisnerComponent;
  let fixture: ComponentFixture<HostLisnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostLisnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostLisnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
