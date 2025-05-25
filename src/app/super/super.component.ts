import { Component } from '@angular/core';
import { SubComponent } from '../sub/sub.component';

@Component({
  selector: 'app-super',
  imports: [SubComponent],
  templateUrl: './super.component.html',
  styleUrl: './super.component.scss',
})
export class SuperComponent {
  receivedMessage: String = '';
  OnMessageRecived(message: String) {
    this.receivedMessage = message;
  }
}
