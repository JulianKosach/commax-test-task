import { Component, OnInit } from '@angular/core';
import { Company } from '../../services/company';
import { CompaniesService } from '../../services/companies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  companies: Array<Company>;

  constructor(private companiesService: CompaniesService) {}

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companiesService.getCompanies()
      .subscribe(companies => this.companies = companies);
  }

}
