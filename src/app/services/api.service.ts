import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUser } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${environment.api_end_point}/users`);
  }

  getUserById(id:string): Observable<IUser> {
    return this.http.get<IUser>(`${environment.api_end_point}/users/${id}`);
  }
}
