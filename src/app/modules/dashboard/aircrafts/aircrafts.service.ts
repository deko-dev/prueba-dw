import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Aircraft, ResponseData } from 'src/app/utils/general-interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AircraftsService {
  
  constructor(
    private http: HttpClient
  ) { }

  /**
   * Method for getting all aircrafts
   * @returns Promise<ResponseData<Aircraft[]>>
   */
  public getAircrafts(): Promise<ResponseData<Aircraft[]>> {
    return this.http.get<ResponseData<Aircraft[]>>(
      `${environment.host}/api/aircrafts/all`
    ).toPromise();
  }

  /**
   * Method for getting aircraft by id
   * @param id
   * @returns Promise<ResponseData<Aircraft>>
   */
  public getAircraft(id: string): Promise<ResponseData<Aircraft>> {
    return this.http.get<ResponseData<Aircraft>>(
      `${environment.host}/api/aircrafts/${id}`
    ).toPromise();
  }

  /**
   * Method for creating new aircraft
   * @param aircraft
   * @returns Promise<ResponseData<Aircraft>>
   */
  public createAircraft(aircraft: Aircraft): Promise<ResponseData<Aircraft>> {
    return this.http.post<ResponseData<Aircraft>>(
      `${environment.host}/api/aircrafts/create`,
      aircraft
    ).toPromise();
  }

  /**
   * Method for updating aircraft
   * @param aircraft
   * @returns Promise<ResponseData<Aircraft>>
   */
  public updateAircraft(aircraft: Aircraft): Promise<ResponseData<Aircraft>> {
    return this.http.put<ResponseData<Aircraft>>(
      `${environment.host}/api/aircrafts/update/${aircraft._id}`,
      aircraft
    ).toPromise();
  }

  /**
   * Method for deleting aircraft
   * @param id
   * @returns Promise<ResponseData<Aircraft>>
   */
  public deleteAircraft(id: string): Promise<ResponseData<Aircraft>> {
    return this.http.delete<ResponseData<Aircraft>>(
      `${environment.host}/api/aircrafts/delete/${id}`
    ).toPromise();
  }
}
