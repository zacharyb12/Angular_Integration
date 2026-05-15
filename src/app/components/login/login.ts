import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Authservice } from '../../services/auth-service/authservice';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

private fb = inject(FormBuilder)
private auth = inject(Authservice)
private router = inject(Router)

form = this.fb.group({
  email : ['',Validators.required],
  password : ['',Validators.required],
})

errorMessage = signal<string|null>(null)
loading = signal(false)

onSubmit(): void{
  if(this.form.invalid)
  {
    return;
  }

  this.auth.login(this.form.value as any).subscribe({
    next: () => this.router.navigateByUrl("/"),
    error: (err) => {
      this.errorMessage.set(err.error?.message ?? 'Erreur de connexion')
      this.loading.set(false)
    }
  })
}
}
