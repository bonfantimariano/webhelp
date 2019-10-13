import { Component, OnInit } from '@angular/core';
import { User, Ship, ShipList } from '../../_models';
import { ShipService } from '../../_services';

@Component({templateUrl: 'ships-list.component.html'})
export class ShipsListComponent implements OnInit {
    currentUser: User;
    nextPage = '1';
    showMore = true;
    ships: Ship[] = [];

    constructor(private shipService: ShipService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
      this.fetchData(this.nextPage);
    }

    fetchData(page) {
      this.shipService.getAll(page).subscribe( (data: ShipList) => {
        data.next ? this.nextPage = data.next.split('=').slice(-1)[0] : this.showMore = false;
        data.results.map(item => {
          this.ships.push(
            new Ship(item)
          );
        });
      });
    }
}
