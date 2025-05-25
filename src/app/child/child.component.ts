import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  inputs:["messageProps"]
})
export class ChildComponent {
 messageProps:string = ""
}
