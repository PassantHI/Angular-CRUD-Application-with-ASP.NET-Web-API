import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  constructor(public productService:ProductService,public activeRoute:ActivatedRoute){}
  proDetails:Product=new Product(0,"",0,"","","")
  sub:Subscription|null=null

  ngOnInit() {
    this.sub=this.activeRoute.params.subscribe(parameter=>{
      this.productService.getById(parameter['productId']).subscribe({
        next:data=>{
          console.log(data);
          this.proDetails=data;
        },
        error: err => {
          console.error('Error fetching products', err);
        }
      })
    })
    
  }

}
