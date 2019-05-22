
import { Injectable, EventEmitter } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Company } from './company';
import { COMPANIES } from './mock-companies';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  companies: Company[];
  onChange: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.companies = COMPANIES;
  }
  emitChangeEvent() {
    this.onChange.emit( Math.random() );
  }
  getChangeEmitter() {
    return this.onChange;
  }

  getCompanies(): Observable<Company[]> {
    return of( this.companies );
  }

  getCompany(id): Observable<Company> {
    return of( this.companies.find(company => company.id === id) );
  }

  addCompany(company): void {
    this.companies.push({
      id: Math.random().toString(36).substr(2, 9),
      name: company.name,
      city: company.city,
      address: {
        lat: 51.507222,
        lng: -0.1275,
      },
      picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSorKgYDVP965AfsKx99CshH8CQ3VzkxQ5UbHtSsLW_zbIfz6kD',
    });
  }

  deleteCompany(id): void {
    this.companies = this.companies.filter(company => company.id !== id);
    this.emitChangeEvent();
  }

  deleteAll(): void {
    this.companies = [];
    this.emitChangeEvent();
  }


}
