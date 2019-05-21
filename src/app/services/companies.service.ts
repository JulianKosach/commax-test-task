
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Company } from './company';
import { COMPANIES } from './mock-companies';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {

  constructor() { }

  getCompanies(): Observable<Company[]> {
    return of( COMPANIES );
  }

  getCompany(id): Observable<Company> {
    return of( COMPANIES.find(company => company.id === id) );
  }
}
