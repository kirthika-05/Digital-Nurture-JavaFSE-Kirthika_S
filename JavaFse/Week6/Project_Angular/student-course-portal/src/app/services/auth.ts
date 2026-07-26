import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Change this to false to test the guard
  isLoggedIn = true;

}