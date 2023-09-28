import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CoreService } from 'src/app/common/core.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  bannerData: any = {};
  address: any = {};
  form = {
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  };
  constructor(private coreService: CoreService) {
    this.coreService.getHttp('contact.json').subscribe((res: any) => {
      this.bannerData = res.banner;
    })
    this.coreService.getHttp('footer.json').subscribe((res: any) => {
      this.address = res.ourAddress;
    })
  }

  onSubmit(form: NgForm): void {
    console.log(JSON.stringify(this.form, null, 2));
    form.resetForm();
  }

  onReset(form: NgForm): void {
    form.reset();
  }

}
