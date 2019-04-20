import { Injectable } from '@angular/core';
import {User} from '../../models/User';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: User;
  userAuthenticated = new BehaviorSubject<boolean>(false)
  isAuthenticated = this.userAuthenticated.asObservable();

  constructor() { }


}
