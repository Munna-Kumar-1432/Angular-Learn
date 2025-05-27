import { Component } from '@angular/core';
import { ProductService } from '../service/product-service.service';

@Component({
  selector: 'app-product-data',
  imports: [],
  templateUrl: './product-data.component.html',
  styleUrl: './product-data.component.scss',
})
export class ProductDataComponent {
  allProductData:
    | {
        id: number;
        name: string;
        description: string;
        price: number;
        category: string;
      }[]
    | undefined;

  constructor(private productData: ProductService) {}

  getData() {
    console.log("Data",this.allProductData)
    this.allProductData = this.productData.getProductData()
  }

    ngOnInit() {
    this.getData();
  }
}
