import { Component } from '@angular/core';
import { CoreService } from 'src/app/common/core.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  header: any;
  isShow = false;

  constructor(private coreService: CoreService) {
    this.coreService.getHttp('header.json').subscribe((res: any) => {
      this.header = res.header;
    })
  }

}
