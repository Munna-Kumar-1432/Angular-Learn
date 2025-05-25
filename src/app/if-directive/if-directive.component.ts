import { Component } from '@angular/core';

@Component({
  selector: 'app-if-directive',
  imports: [],
  templateUrl: './if-directive.component.html',
  styleUrl: './if-directive.component.scss'
})
export class IfDirectiveComponent {
 isLoginned = !false;
 isAdmin = !false;
}
