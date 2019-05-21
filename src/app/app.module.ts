import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './routing/app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routing/home/home.component';
import { CompanyAddComponent } from './routing/company-add/company-add.component';
import { CompanyDetailsComponent } from './routing/company-details/company-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyAddComponent,
    CompanyDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
