import {Injectable} from '@angular/core';
import {LoggerService} from 'app/shared/logger.service';

// @Injectable的意思是,其他服务也可以注入到ProductService这个服务中
// 而ProductService这个服务能不能注入到其他地方,是要看其有没有在providers这个提供器里被提供
// @Component 装饰器包含了@Injectable的含义
@Injectable()
export class ProductService {

  constructor(private logger: LoggerService) {
  }

  getProduct(): Product {
    this.logger.log('getProduct方法被调用');
    return new Product(0, 'iPhone7', 5899, '最新款苹果手机');
  }

}

// 用来封装商品信息的类
export class Product {
  constructor(public id: number,
              public title: string,
              public price: number,
              public desc: string) {

  }
}
