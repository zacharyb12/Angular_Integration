import { Component, inject, OnInit, signal } from '@angular/core';
import { Productservice } from '../../services/product-service/productservice';
import { Product } from '../../models/product.model';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit{
  
  
  private auth = inject(Productservice)
  
  products = signal<Product[]>([])


  ngOnInit(): void {

    this.auth.getAll().subscribe({
      next : (res : Product[]) => {
        this.products.set(res)
      },
      error : (err) => {
          console.log(err)
      }
    })
  }


}
