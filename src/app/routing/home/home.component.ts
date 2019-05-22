import { Component, OnInit, HostListener } from '@angular/core';
import { Company } from '../../services/company';
import { CompaniesService } from '../../services/companies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  companies: Array<Company>;
  subscription: any;
  page: number;
  wasScrolledToEnd: boolean;

  constructor(private companiesService: CompaniesService) {}

  ngOnInit() {
    this.page = 0;
    this.companies = [];
    this.wasScrolledToEnd = true;
    this.subscription = this.companiesService.getChangeEmitter()
      .subscribe(item => this.getCompanies());
    this.getCompanies();
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    const scrollTop = event.target.scrollingElement.scrollTop;
    const scrollHeight = event.target.scrollingElement.scrollHeight;
    const wh = window.innerHeight;
    const isScrolledToEnd = scrollTop > (scrollHeight - wh - 100);
    if (!this.wasScrolledToEnd && isScrolledToEnd) {
      this.wasScrolledToEnd = true;
      this.page++;
      this.getCompanies();
    } else if (!isScrolledToEnd) {
      this.wasScrolledToEnd = false;
    }
  }

  getCompanies(): void {
    const count = 10;
    const offset = this.page * count;
    this.companiesService.getCompanies(offset, count)
      .subscribe(companies => {
        this.companies = this.companies.concat(companies);
      });
  }

  deleteAll() {
    this.companiesService.deleteAll();
  }

  deleteCompany(id) {
    this.companiesService.deleteCompany(id);
  }

}
