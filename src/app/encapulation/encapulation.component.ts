import { Component, ViewEncapsulation } from '@angular/core';
import { EncapulationSecondComponent } from "../encapulation-second/encapulation-second.component";

@Component({
  selector: 'app-encapulation',
  imports: [EncapulationSecondComponent],
  templateUrl: './encapulation.component.html',
  styleUrl: './encapulation.component.scss',
  // encapsulation:ViewEncapsulation.None
})
export class EncapulationComponent {

}
