import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mileage } from 'src/app/_models/mileage';

@Injectable({
  providedIn: 'root'
})
export class MileageService {
  baseUrl = 'http://localhost:5000/api/mileageinfos/';

  constructor(private http: HttpClient) { }

  getMileages() {
    return this.http.get<Mileage[]>(this.baseUrl);
  }

  addMileage(mileage: Mileage) {
    return this.http.post(this.baseUrl + 'create', mileage);
  }

  deleteMileage(id: number) {
    return this.http.delete(this.baseUrl + id);
  }
}
