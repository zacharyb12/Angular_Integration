import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Login } from "../login/login";
import { Authservice } from '../../services/auth-service/authservice';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, Login],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  readonly auth = inject(Authservice)

  logout(): void{
  this.auth.logout();
  }
}
