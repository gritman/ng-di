import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../shared/product.service';
import {AnotherProductService} from '../shared/another-product.service';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css'],
  // 当一个提供器声明在模块中时,只对该组件及其子组件可见,其他组件不可以使用
  // 当组件提供器和模块提供器的provide相同时,组件提供器优先
  providers: [
    {
      provide: ProductService,
      useClass: AnotherProductService
    }
  ]
})
export class Product2Component implements OnInit {

  product: Product;

  // 声明productService需要从外部注入
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
