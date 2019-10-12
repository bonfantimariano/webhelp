import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';


import { User } from '../_models';

@Injectable()
export class UserService {
    constructor(private http: HttpClient, private appConfig: AppConfig) { }

    getAll() {
        return this.http.get<User[]>(`${this.appConfig.apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get(`${this.appConfig.apiUrl}/users/` + id);
    }

    register(user: User) {
        return this.http.post(`${this.appConfig.apiUrl}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${this.appConfig.apiUrl}/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`${this.appConfig.apiUrl}/users/` + id);
    }
}
