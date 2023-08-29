import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country-interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}
  URL = 'https://restcountries.com/v3.1/all';

  getCountries(): Observable<string[]> {
    return this.http.get<Country[]>(this.URL).pipe(
      map((countries) => countries.map((c) => c.name.common)),
      catchError(() => of([]))
    );
  }

  addCountry(country: any) {
    return this.http.post(this.URL, country);
  }

  updateCountry(country: any) {
    return this.http.put(`${this.URL}/${country.id}`, country);
  }
}
