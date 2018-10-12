import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mileage } from 'src/app/_models/mileage';

@Injectable({
  providedIn: 'root'
})
export class MileageService {
  constructor(private http: HttpClient) { }

  getMileages() {
    return this.http.get<Mileage[]>('http://localhost:5001/api/mileageinfos');
  }

  addMileage(mileage: Mileage) {
    this.http.post('http://localhost:5001/api/mileageinfos', mileage);
  }
}
