import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

export const routes: Routes = [
   
        {path:'product',component:ProductComponent},
        {path:'product/add' ,component:ProductAddComponent},
        {path:'product/details/:productId',component:ProductDetailsComponent},
        {path:'product/delete/:productId' , component:ProductDeleteComponent},
        {path:'product/edit/:productId' , component:ProductEditComponent}


    
];
