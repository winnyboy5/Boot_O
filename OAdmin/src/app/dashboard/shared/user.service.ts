import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BooConfig } from './boo-config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getConfig(): Observable<BooConfig> {
    return this.http.get<BooConfig>('assets/boot_o.config.json');
  }

  getRequirements(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/requirements');
  }

  loadInit(values): Observable<any> {
    const json = {
      style: values.styleCtrl,
      prefix: values.prefixCtrl,
      routing: values.routingCtrl,
    };
    const options = {params: json};
    return this.http.get<any>('http://localhost:3000/api/init', options);
  }

}
