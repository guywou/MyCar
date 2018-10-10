import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MileageService {
  constructor(private http: HttpClient) { }

  getMileages() {
    return this.http.get<object[]>('http://localhost:5001/api/mileageinfos');
  }
}
