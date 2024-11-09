import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounce, first, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users';

  private getUsersCache = new Map<number, any>();

  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<any> {
    //cached data
    if (this.getUsersCache.has(page)) {
      return of(this.getUsersCache.get(page));
    }

    const response = this.http.get(`${this.apiUrl}?page=${page}`)
    response.pipe(first()).subscribe(data => {
      this.getUsersCache.set(page, data);
    });

    return response;
  }

}
