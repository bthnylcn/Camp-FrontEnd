import { HttpClient } from '@angular/common/http'; //apiye bağlanabilmek backende istekte bulunabilmek için
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44333/api/products/getall';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl);
  }
}
