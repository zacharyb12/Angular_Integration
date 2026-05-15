import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateProductRequest, Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class Productservice {

private readonly apiUrl = `${environment.apiUrl}/product`

constructor(
  private http : HttpClient
){}

// getAll
getAll() : Observable<Product[]>{
  return this.http.get<Product[]>(this.apiUrl);
}

// create
createProduct(newProduct : CreateProductRequest) : Observable<Product>{
  return this.http.post<Product>(this.apiUrl,newProduct);
}

// getById


// update

// delete



}
