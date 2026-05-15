import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Authservice } from '../../services/auth-service/authservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

private fb = inject(FormBuilder)
private auth = inject(Authservice)
private router = inject(Router)


errorMessage = signal<string | null>(null)

form = this.fb.group({
  userName : ['',Validators.required],
  email    : ['',Validators.required],
  password : ['',Validators.required]
})

onSubmit()
{
  // console.log(this.form.value)
  // if(this.form.invalid)
  // {
  //   return;
  // }
  console.log("test 1")

  this.auth.register(this.form.value as any).subscribe({
    next: () => {
      console.log("test 2")
        this.router.navigateByUrl("/")
    },
    error : (err) => {
        this.errorMessage.set(err.error?.message ?? 'Erreur lors de l\'inscription')
    }

  })
}


}
