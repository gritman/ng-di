import {Injectable} from '@angular/core';
import {Product, ProductService} from './product.service';
import {LoggerService} from './logger.service';

@Injectable()
export class AnotherProductService implements ProductService {

  // 为什么此处必须是public?
  // 可能是因为要继承
  constructor(public logger: LoggerService) {
  }

  getProduct(): Product {
    return new Product(0, 'sumsung7', 4899, '最新款三星手机');
  }



}
