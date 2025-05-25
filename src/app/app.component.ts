import { Component } from '@angular/core';
import { CounterComponent } from "./counter/counter.component";
import { HostLisnerComponent } from "./host-lisner/host-lisner.component";
import { PreserveWhitespaceComponent } from "./preserve-whitespace/preserve-whitespace.component";


@Component({
  selector: 'app-root',
  imports: [PreserveWhitespaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'firstApp';
}
