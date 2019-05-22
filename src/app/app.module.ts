import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule, MatButtonModule, MatCardModule, MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './routing/app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routing/home/home.component';
import { CompanyDetailsComponent } from './routing/company-details/company-details.component';
import { CompanyAddComponent } from './routing/company-add/company-add.component';
import { SafeUrl } from './safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyDetailsComponent,
    CompanyAddComponent,
    SafeUrl,
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCQVDahLNE7np4tJj1d4Qku2XZhOzAVpnA',
      libraries: ['places']
    }),
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
