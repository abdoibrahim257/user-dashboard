import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, map, Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users';

  private getUsersCache = new Map<number, any>(); // list of users
  private getUserCache = new Map<number, any>(); // single user

  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<any> {
    //cached data
    if (this.getUsersCache.has(page)) {
      return of(this.getUsersCache.get(page));
    }

    const response = this.http.get(`${this.apiUrl}?page=${page}`);
    response.pipe(first()).subscribe(data => {
      this.getUsersCache.set(page, data);
    });

    return response;
  }

  getUser(id: number): Observable<any> {
    //cached data
    if (this.getUserCache.has(id)) {
      return of(this.getUserCache.get(id));
    }

    const response = this.http.get(`${this.apiUrl}/${id}`);
    response.pipe(first()).subscribe(data => {
      this.getUserCache.set(id, data);
    });

    return response;

  }

}

