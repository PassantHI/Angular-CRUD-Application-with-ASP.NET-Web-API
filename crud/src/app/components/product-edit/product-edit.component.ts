import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Productpost } from '../../models/productpost';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
  constructor(public productService:ProductService , public activeRoute:ActivatedRoute,public router:Router){}
  pro:Product=new Product(0,"",0,"","","");
  newpro:Productpost=new Productpost("",0,"",0,"",0)

  ngOnInit() {
    this.activeRoute.params.subscribe(p=>{
      this.productService.getById(p['productId']).subscribe({
        next:data=>{this.pro=data}
      }
      )
    });
  }

  edit(){
    this.productService.edit(this.pro.productId,this.newpro).subscribe({
      next:data=>{
        console.log("edit");
        this.router.navigateByUrl("/product");
      },
      error:err=>{
        console.error('Error fetching products', err);

      }
    });
  }



}
