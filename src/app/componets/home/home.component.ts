import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/common/core.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any = []
  constructor(private coreService: CoreService) { }

  ngOnInit(): void {
    this.getSliderData();
  }

  getSliderData() {
    this.coreService.getHttp().subscribe((res:any) => {
      this.data = res.slider;
      console.log(this.data)
    })
  }



}
