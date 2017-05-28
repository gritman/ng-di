import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {Product1Component} from './product1/product1.component';
import {ProductService} from './shared/product.service';
import {Product2Component} from './product2/product2.component';
import {LoggerService} from './shared/logger.service';
import {AnotherProductService} from './shared/another-product.service';

@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  // 提供器,声明该组件可以被注入
  // 当一个提供器声明在模块中时,它是对所有模块可见的
  // 如果组件没有声明提供器,它就会去找模块的提供器
  // 优先把提供器声明在模块中,只有必须对其他组件不可见时,才声明在组件中
  providers: [
    {
      provide: ProductService,
      // 工厂方法创建的对象是单例对象,只会创建一次,所以所有的ProductService都是同一个实例!
      useFactory: (logger: LoggerService) => {
        const dev = Math.random() > 0.5;
        if (dev) {
          return new ProductService(logger);
        } else {
          return new AnotherProductService(logger);
        }
      },
      deps: [LoggerService] // 声明工厂需要的参数,也是依赖注入的
    },
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
