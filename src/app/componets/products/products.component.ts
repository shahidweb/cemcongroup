import { Component } from '@angular/core';
import { CoreService } from 'src/app/common/core.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  bannerData: any = {};
  product: any;

  constructor(private coreService: CoreService) {
    this.coreService.getHttp('product.json').subscribe((res: any) => {
      this.bannerData = res.banner;
      this.product = res.content;
    })
  }
}
