import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { UserInterface } from '../models/users/users.module';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) { }

  public getUsers(data: number): Observable<UserInterface> {
    const url = `https://reqres.in/api/users/${data}`;
    return this.http.get<UserInterface>(url).pipe(
      map((d: any) => {
         return d.data;

      })
    );
  }
}
