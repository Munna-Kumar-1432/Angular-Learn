import { Component } from '@angular/core';
import { CounterComponent } from "./counter/counter.component";
import { HostLisnerComponent } from "./host-lisner/host-lisner.component";


@Component({
  selector: 'app-root',
  imports: [HostLisnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'firstApp';
}
