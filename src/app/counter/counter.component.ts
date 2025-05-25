import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
counter:number = 0
increment():void{
  this.counter++
}

decrement():void{
  this.counter--
}
}
