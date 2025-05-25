import { Component, ViewEncapsulation } from '@angular/core';
import { CounterComponent } from "./counter/counter.component";
import { HostLisnerComponent } from "./host-lisner/host-lisner.component";
import { PreserveWhitespaceComponent } from "./preserve-whitespace/preserve-whitespace.component";
import { EncapulationComponent } from "./encapulation/encapulation.component";
import { ParentComponent } from "./parent/parent.component";
import { SuperComponent } from "./super/super.component";
import { IfDirectiveComponent } from "./if-directive/if-directive.component";
import { SwitchComponent } from "./switch/switch.component";
import { LoopComponent } from "./loop/loop.component";


@Component({
  selector: 'app-root',
  imports: [PreserveWhitespaceComponent, EncapulationComponent, ParentComponent, SuperComponent, IfDirectiveComponent, SwitchComponent, LoopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // encapsulation:ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'firstApp';
}
