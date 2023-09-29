import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http: HttpClient) {
  }

  getHttp(endPoint: string) {
    return this.http.get(`${environment.apiUrl}${endPoint}`);
  }

  contactForm(form: any) {
    return this.http.post('https://cemcongroup.in/mailHandler.php', form);
  }
}
