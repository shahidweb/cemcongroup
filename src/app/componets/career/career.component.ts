import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CoreService } from 'src/app/common/core.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {
  bannerData: any = {};
  form = {
    name: '',
    surname: '',
    phone: '',
    email: '',
    town: '',
    state: '',
    address: '',
    zipcode: '',
    message: '',
  };

  constructor(private coreService: CoreService) {
    this.coreService.getHttp('career.json').subscribe((res: any) => {
      this.bannerData = res.banner;
    })
  }


  onSubmit(): void {
    console.log(JSON.stringify(this.form, null, 2));
  }

  onReset(form: NgForm): void {
    form.reset();
  }
}
