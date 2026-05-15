import { Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthResponse, LoginRequest, RegisterRequest } from '../../models/auth.model';
import { Observable, tap } from 'rxjs';


const TOKEN_KEY = 'auth_token'
const USER_KEY = 'auth_user'

@Injectable({
  providedIn: 'root',
})

export class Authservice {
// Url 
private readonly apiurl = `${environment.apiUrl}/auth`

// Signal pour partager l'information
readonly currentUser = signal<AuthResponse|null>(this.loadUser());


constructor(
  private http : HttpClient,
  private router : Router
){}


register(form : RegisterRequest) : Observable<AuthResponse>{
  return this.http.post<AuthResponse>(`${this.apiurl}/register`,form).pipe(
    tap((res => this.saveSession(res))
  ))
}

login(form : LoginRequest):Observable<AuthResponse>{
 return this.http.post<AuthResponse>(`${this.apiurl}/login`,form).pipe(
  tap(res => this.saveSession(res))
 )
}

logout():void{
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  this.currentUser.set(null)
  this.router.navigateByUrl("/");
}

getToken() : string | null
{
 return localStorage.getItem(TOKEN_KEY);
}

isLoggedIn():boolean{
  return !!this.getToken();
}

isAdmin(): boolean{
  return this.currentUser()?.role === "Admin"
}

// ------------------ Private -------------------

private saveSession(res : AuthResponse) : void {
  localStorage.setItem(TOKEN_KEY,res.token)
  localStorage.setItem(USER_KEY, JSON.stringify(res) )
  this.currentUser.set(res)
}

private loadUser(): AuthResponse | null
{
  const raw = localStorage.getItem(USER_KEY);

  return raw ? JSON.parse(raw) : null
}
}
