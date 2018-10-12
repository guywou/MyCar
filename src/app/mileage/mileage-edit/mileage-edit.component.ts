import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MileageService } from '../../_services/mileage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mileage-edit',
  templateUrl: './mileage-edit.component.html',
  styleUrls: ['./mileage-edit.component.css']
})
export class MileageEditComponent implements OnInit {

  editForm: FormGroup;

  constructor(private mileageService: MileageService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.mileageService.addMileage(this.editForm.value);
  }
}
