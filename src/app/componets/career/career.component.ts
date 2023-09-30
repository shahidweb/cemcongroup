import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private coreService: CoreService, private route: Router) {
    this.coreService.getHttp('career.json').subscribe((res: any) => {
      this.bannerData = res.banner;
    })
  }


  onSubmit(form: NgForm): void {
    const data = this.coreService.appendData(form.value);
    this.coreService.postHttp(data, this.coreService.end_Points.career_email).subscribe({
      next: () => { this.route.navigateByUrl('/home'); form.resetForm(); },
      error: () => { this.route.navigateByUrl('/home'); form.resetForm(); },
    });
  }

  onReset(form: NgForm): void {
    form.reset();
  }
}
