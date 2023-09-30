import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private coreService: CoreService, private route: Router) {
    this.coreService.getHttp('contact.json').subscribe((res: any) => {
      this.bannerData = res.banner;
    })
    this.coreService.getHttp('footer.json').subscribe((res: any) => {
      this.address = res.ourAddress;
    })
  }

  onSubmit(form: NgForm): void {
    console.log(JSON.stringify(this.form, null, 2));
    const data = new FormData();
    data.append("name", this.form.name);
    data.append("phone", this.form.phone);
    data.append("email", this.form.email);
    data.append("subject", this.form.subject);
    data.append("message", this.form.message);
    this.coreService.postHttp(data, this.coreService.end_Points.contact_email).subscribe({
      next: () => { this.route.navigateByUrl('/home'); form.resetForm(); },
      error: () => { this.route.navigateByUrl('/home'); form.resetForm(); },
    });
  }

  onReset(form: NgForm): void {
    form.reset();
  }

}
