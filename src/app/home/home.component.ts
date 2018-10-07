import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private  mileages:  Array<object> = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:5001/api/mileageinfos').subscribe((data: Array<object>) => {
      this.mileages = data;
      console.log(data);
    });
  }
}
