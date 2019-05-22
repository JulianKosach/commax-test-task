import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { Company } from '../../services/company';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompaniesService } from '../../services/companies.service';
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';

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
    searchControl: new FormControl(''),
    city: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    latitude: new FormControl(51.507222, [
      Validators.required,
    ]),
    longitude: new FormControl(-0.1275, [
      Validators.required,
    ]),
    pictureUrl: new FormControl(null, [
      Validators.required,
    ]),
  });

  @ViewChild('search')
  public searchElementRef: ElementRef;

  @ViewChild('picturePicker')
  public picturePickerElementRef: ElementRef;

  constructor(
    private companiesService: CompaniesService,
    private location: Location,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
  ) { }

  ngOnInit() {
    // create search FormControl

    // set current position
    this.setCurrentPosition();

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set latitude, longitude and zoom
          console.log('New Place', place);
          this.companyForm.controls.city.setValue( place.formatted_address );
          this.companyForm.controls.latitude.setValue( place.geometry.location.lat() );
          this.companyForm.controls.longitude.setValue( place.geometry.location.lng() );
        });
      });
    });
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.companyForm.controls.latitude.setValue( position.coords.latitude );
        this.companyForm.controls.longitude.setValue( position.coords.longitude );
      });
    }
  }

  onPictureSelected(event) {
    const file: File = event.target.files[0];
    const reader: FileReader = new FileReader();
    reader.onloadend = (e) => {
      console.log(file);
      this.companyForm.controls.pictureUrl.setValue( reader.result );
   };
    reader.readAsDataURL(file);
  }

  addCompany(): void {
    this.companiesService.addCompany({
      name: this.companyForm.controls.name.value,
      city: this.companyForm.controls.city.value,
      lat: this.companyForm.controls.latitude.value,
      lng: this.companyForm.controls.longitude.value,
      picture: this.companyForm.controls.pictureUrl.value,
    });
    this.location.back();
  }

}
