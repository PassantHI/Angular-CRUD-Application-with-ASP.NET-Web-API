import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-product-delete',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})
export class ProductDeleteComponent {
  constructor(public productService:ProductService , public activeRoute:ActivatedRoute,public router:Router){}
  pro:Product=new Product(0,"",0,"","","");

  ngOnInit() {
    this.activeRoute.params.subscribe(p=>{
      this.productService.getById(p['productId']).subscribe({
        next:data=>{this.pro=data}
      }
      )
    });
  }

  delete(id:number){
    this.productService.delete(id).subscribe({
      next:(res)=>{
        console.log("Deleted");
        this.router.navigate(['/product']);
      },
      error: (err) => {
        console.error('Error deleting product:', err);
      }

    })
  }

}
