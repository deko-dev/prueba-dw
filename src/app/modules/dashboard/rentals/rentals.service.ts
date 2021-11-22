import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rental } from 'src/app/utils/general-interfaces';
import { environment } from 'src/environments/environment';
import { ResponseData } from '../../../utils/general-interfaces';

@Injectable({
  providedIn: 'root'
})
export class RentalsService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Method for get all rentals
   */
  public getRentals(): Promise<ResponseData<Rental[]>> {
    return this.http.get<ResponseData<Rental[]>>(
      `${environment.host}/api/rentals/all`
    ).toPromise();
  }


  /**
   * Method for getting rental by id
   * @param id
   * @returns Promise<ResponseData<Rental>>
   */
  public getRental(id: string): Promise<ResponseData<Rental>> {
    return this.http.get<ResponseData<Rental>>(
      `${environment.host}/api/rentals/${id}`
    ).toPromise();
  }

  /**
   * Method for creating new rental
   * @param rental
   * @returns Promise<ResponseData<Rental>>
   */
  public createRental(rental: Rental): Promise<ResponseData<Rental>> {
    return this.http.post<ResponseData<Rental>>(
      `${environment.host}/api/rentals/create`,
      rental
    ).toPromise();
  }
}
