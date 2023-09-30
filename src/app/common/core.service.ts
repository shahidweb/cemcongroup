import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { endPoints } from '../shared/urls.model';


@Injectable({
  providedIn: 'root'
})
export class CoreService {
  end_Points = endPoints;
  constructor(private http: HttpClient) {
  }

  getHttp(endPoint: string) {
    return this.http.get(`${environment.fakeApi}${endPoint}`);
  }

  postHttp(data: any, endPoint: any) {
    return this.http.post(`${environment.apiUrl}${endPoint}`, data);
  }
}
