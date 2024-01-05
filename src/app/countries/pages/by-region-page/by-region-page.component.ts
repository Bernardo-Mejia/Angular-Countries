import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {
  constructor(private countriesService: CountriesService) {}
  public countries: Country[] = [];

  searchRegion(region: string): void {
    this.countriesService
      .searchRegion(region)
      .subscribe((countries: Country[]) => (this.countries = countries));
  }
}
