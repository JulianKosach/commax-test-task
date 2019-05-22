import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Company } from '../../services/company';
import { CompaniesService } from '../../services/companies.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
  company: Company;

  constructor(
    private route: ActivatedRoute,
    private companiesService: CompaniesService,
    private location: Location
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getCompany(id);
    }
  }

  getCompany(id): void {
    this.companiesService.getCompany(id)
      .subscribe(company => this.company = company);
  }

}
