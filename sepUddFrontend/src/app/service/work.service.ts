import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor(private http: HttpClient) { }


  submitWorkData(workData): any {
    return this.http.post('api/works/submitWorkData', workData);
  }

}
