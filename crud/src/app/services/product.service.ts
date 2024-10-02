import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Productpost } from '../models/productpost';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient){}
   url="https://localhost:44315/api/Product/"
   

   getAll()
   {
    return this.http.get<Product[]>(this.url)
   }

   add(pro:Productpost){
    return this.http.post<Productpost>(this.url,pro)

   }

   getById(id:number){
    return this.http.get<Product>(this.url+id)
   }

   delete(id:number){
    return this.http.delete(this.url+id);

   }
   edit(id:number,pro:Productpost){
    return this.http.put<Productpost>(this.url+id,pro);
   }
   search(keyWord:string){
    return this.http.get<Product[]>(this.url+`Filtering?KeyWord=${keyWord}`)

   }

   

}
