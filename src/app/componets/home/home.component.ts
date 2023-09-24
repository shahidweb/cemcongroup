import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/common/core.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any = [];
  about: any;
  constructor(private coreService: CoreService) { }

  ngOnInit(): void {
    this.getSliderData();
  }

  getSliderData() {
    this.coreService.getHttp('home.json').subscribe((res: any) => {
      this.data = res.slider;
      this.about = res.about;
    })
  }



}
