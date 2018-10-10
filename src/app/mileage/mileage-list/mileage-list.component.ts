import { Component, OnInit } from '@angular/core';
import { MileageService } from '../../_services/mileage.service';

@Component({
  selector: 'app-mileage-list',
  templateUrl: './mileage-list.component.html',
  styleUrls: ['./mileage-list.component.css']
})
export class MileageListComponent implements OnInit {

  public mileages: object[];

  constructor(private mileageService: MileageService) { }

  ngOnInit() {
    this.mileageService.getMileages().subscribe(data => {
      this.mileages = data;
    });
  }

}
