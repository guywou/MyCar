import { Component, OnInit } from '@angular/core';
import { MileageService } from '../../_services/mileage.service';
import { Mileage } from '../../_models/mileage';
import { Router } from '@angular/router';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-mileage-list',
  templateUrl: './mileage-list.component.html',
  styleUrls: ['./mileage-list.component.css']
})
export class MileageListComponent implements OnInit {

  public mileages: Mileage[];

  constructor(private mileageService: MileageService, private router: Router, private alertifyService: AlertifyService) { }

  ngOnInit() {
    this.getMileages();
  }

  getMileages() {
    this.mileageService.getMileages().subscribe(data => {
      this.mileages = data;
    });
  }

  deleteMileage(mileage: Mileage) {
    this.mileageService.deleteMileage(mileage.id).subscribe((data) => {
      this.mileages = this.mileages.filter(m => m !== mileage);
      this.alertifyService.success('delete successfull');
    });
  }

}
