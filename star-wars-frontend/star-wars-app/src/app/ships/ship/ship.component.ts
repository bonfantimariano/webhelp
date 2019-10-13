import {Component, Input, OnInit} from '@angular/core';
import {Ship} from '../../_models';


@Component({
  selector: 'app-ship',
  templateUrl: 'ship.component.html'
})
export class ShipComponent implements OnInit {
  @Input() ship: Ship;
    constructor() {
    }

    ngOnInit() {
    }
}
