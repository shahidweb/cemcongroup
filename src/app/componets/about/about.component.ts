import { Component } from '@angular/core';
import { CoreService } from 'src/app/common/core.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  bannerData: any = {};

  constructor(private coreService: CoreService) {
    this.coreService.getHttp('about.json').subscribe((res: any) => {
      this.bannerData = res.banner;
    })
  }



}
