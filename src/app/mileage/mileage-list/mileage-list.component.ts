import { Component, OnInit } from '@angular/core';
import { MileageService } from '../../_services/mileage.service';
import { Mileage } from '../../_models/mileage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mileage-list',
  templateUrl: './mileage-list.component.html',
  styleUrls: ['./mileage-list.component.css']
})
export class MileageListComponent implements OnInit {

  public mileages: Mileage[];

  constructor(private mileageService: MileageService, private router: Router) { }

  ngOnInit() {
    this.mileageService.getMileages().subscribe(data => {
      this.mileages = data;
    });
  }


}
