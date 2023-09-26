import { Component } from '@angular/core';
import { CoreService } from 'src/app/common/core.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {
  bannerData: any = {};

  constructor(private coreService: CoreService) {
    this.coreService.getHttp('career.json').subscribe((res: any) => {
      this.bannerData = res.banner;
    })
  }
}
