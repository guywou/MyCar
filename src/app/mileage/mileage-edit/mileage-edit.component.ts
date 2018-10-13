import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MileageService } from '../../_services/mileage.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-mileage-edit',
  templateUrl: './mileage-edit.component.html',
  styleUrls: ['./mileage-edit.component.css']
})
export class MileageEditComponent implements OnInit {

  editForm = new FormGroup({
    date: new FormControl(''),
    mileage: new FormControl('')
  });

  constructor(private mileageService: MileageService, private router: Router, private formBuilder: FormBuilder,
    private alertifyService: AlertifyService) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      date: ['', Validators.required],
      mileage: ['', Validators.required]
    });
  }

  onSubmit() {
    this.mileageService.addMileage(this.editForm.value).subscribe(() => {
      this.alertifyService.success('save successfull');
      this.router.navigate(['mileageList']);
    });
  }
}
