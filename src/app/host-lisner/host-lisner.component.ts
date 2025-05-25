import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-host-lisner',
  imports: [],
  templateUrl: './host-lisner.component.html',
  styleUrl: './host-lisner.component.scss',
})
export class HostLisnerComponent {
  bgColor = 'blue';
  @HostListener('mouseenter') onMouseEnter() {
    this.bgColor = 'green';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor = 'red';
  }
  @HostListener('click') onMouseClick() {
    this.bgColor = 'yellow';
  }
}
