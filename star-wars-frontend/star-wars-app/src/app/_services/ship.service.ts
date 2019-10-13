import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ShipService {

  constructor(private http: HttpClient) { }

  getAll(page) {
    return this.http.get('https://swapi.co/api/starships/?page=' + page);
  }
}
