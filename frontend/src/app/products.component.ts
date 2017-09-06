import { Component, OnInit } from '@angular/core';

import { Product }        from './product';
import { ProductService } from './product.service';


@Component({
  selector: 'my-products',
  templateUrl: './products.component.html',
  providers: [ProductService]
})


    
export class ProductsComponent implements OnInit {
    constructor(private productService: ProductService) { 
    }
      
    products: Product[] = [];
    
    add(prod: Product): void {
        if(!prod.quantity) prod.quantity = 1;
        else prod.quantity++;
    }

    delete(prod: Product): void {
        if(prod.quantity) prod.quantity--;
    }

    getProducts(): void {
        this.productService.getProducts().then(products => this.products = products);
    }

    getCartTotalPrice(): number {
        return this.products.reduce(function (a,b) { return a + ((b.quantity ? b.quantity : 0) * b.price); }, 0) 
    }
    

    getCartTotalCount(): number {
        return this.products.reduce(function (a,b) { return a + ((b.quantity ? b.quantity : 0)); }, 0) 
    }

    ngOnInit(): void {
        this.getProducts();
    }

}

   