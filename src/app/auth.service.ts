import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private logged = false;
public previousUrl: string;
  constructor() { }
signin() {
  this.logged = true;
}
signout() {
  this.logged = false;
}
isLogged() {
  return this.logged;
}
}
