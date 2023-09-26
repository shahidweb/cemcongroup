import { Component } from '@angular/core';
import { CoreService } from 'src/app/common/core.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  bannerData: any = {};

  constructor(private coreService: CoreService) {
    this.coreService.getHttp('contact.json').subscribe((res: any) => {
      this.bannerData = res.banner;
    })
  }
}
