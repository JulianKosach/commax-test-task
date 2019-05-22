import { Component, OnInit } from '@angular/core';
import { Company } from '../../services/company';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompaniesService } from '../../services/companies.service';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.scss']
})
export class CompanyAddComponent implements OnInit {
  companyForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    city: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
  });

  constructor(
    private companiesService: CompaniesService,
    private location: Location,
  ) { }

  ngOnInit() {
  }

  addCompany(): void {
    this.companiesService.addCompany({
      name: this.companyForm.controls.name.value,
      city: this.companyForm.controls.city.value,
    });
    this.location.back();
  }

}
