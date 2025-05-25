import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sub',
  imports: [],
  templateUrl: './sub.component.html',
  styleUrl: './sub.component.scss'
})
export class SubComponent {
  @Output() messageEvent = new EventEmitter<String>();
  SendMessage(value:string){
   this.messageEvent.emit(value)
  }
}
