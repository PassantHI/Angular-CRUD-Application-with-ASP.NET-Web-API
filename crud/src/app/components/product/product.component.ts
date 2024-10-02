import { Component } from '@angular/core';
import { ProductListComponent } from "../product-list/product-list.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductAddComponent } from "../product-add/product-add.component";
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductListComponent, RouterLink, RouterOutlet, ProductAddComponent,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(public productService:ProductService){}
  
  products:Product[]=[]

  key:string="";
  sub:Subscription|null=null

  ngOnInit(): void {this.sub=
    this.productService.getAll().subscribe({
      next:data=>{console.log(data);
        this.products=data},
        error: err => {
          console.error('Error fetching products', err);
        }
    });
    
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  search(){
    this.productService.search(this.key).subscribe({
      next:data=>{
        console.log(data);
        this.products=data;
      },
      error:err=>{
        console.error('Error fetching products', err);

      }
    });
  }
}
