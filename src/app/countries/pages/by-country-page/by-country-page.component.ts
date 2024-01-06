import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  constructor(private countriesService: CountriesService) {}
  searchByCountry(term: string): void {
    this.isLoading = true;
    this.countriesService
      .searchCountry(term)
      .subscribe((countries: Country[]) => {
        this.countries = countries;
        this.isLoading = false;
      });
  }
}
