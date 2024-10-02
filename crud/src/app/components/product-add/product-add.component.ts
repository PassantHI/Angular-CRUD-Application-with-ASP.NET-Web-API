import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';
import { Productpost } from '../../models/productpost';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  constructor(public produceService:ProductService ,public router:Router){}
  newpro:Productpost=new Productpost("",0,"",0,"",0);
  save(){
    this.produceService.add(this.newpro).subscribe(
      {
        next:data=>{
          console.log(data);
          this.router.navigateByUrl("/product");
        },
        error:err=>{
          console.error('Error fetching products', err);

        }
      }
    );
  }

}
