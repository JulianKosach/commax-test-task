
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

  getCompanies(offset = 0, count = 10): Observable<Company[]> {
    return of( this.companies.slice(offset, offset + count));
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
        lat: company.lat || 51.507222,
        lng: company.lng || -0.1275,
      },
      picture: company.picture ||
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSorKgYDVP965AfsKx99CshH8CQ3VzkxQ5UbHtSsLW_zbIfz6kD',
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
