import { Component, inject, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Login } from "../login/login";
import { Authservice } from '../../services/auth-service/authservice';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink, 
    Login
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  readonly auth = inject(Authservice)

  isOpen = signal(false)

  logout(): void{
  this.auth.logout();
  }

  toggleForm() : void {
    this.isOpen.set(!this.isOpen());
  }
}
