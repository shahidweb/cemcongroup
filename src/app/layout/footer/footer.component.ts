import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/common/core.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year = new Date().getFullYear();
  quickLink: any;
  address: any;
  company: any;
  constructor(private coreService: CoreService) {
  }

  ngOnInit(): void {
    this.getData();
  }


  getData() {
    this.coreService.getHttp('footer.json').subscribe((res: any) => {
      this.quickLink = res.quickLink;
      this.address = res.ourAddress;
      this.company = res.ourCompany;
    })
  }
}
