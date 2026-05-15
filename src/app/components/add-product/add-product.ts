import { Component, inject } from '@angular/core';
import { Productservice } from '../../services/product-service/productservice';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {

private productService = inject(Productservice)
private fb = inject(FormBuilder)
private router = inject(Router)

form = this.fb.group({
  name : ['' , Validators.required],
  description : ['' , Validators.required],
  price : [0 , Validators.required],
  stock : [0 , Validators.required],
})

onSubmit(){
  this.productService.createProduct(this.form.value as any).subscribe({
    next : () => this.router.navigateByUrl('/products')
  })
}

}
