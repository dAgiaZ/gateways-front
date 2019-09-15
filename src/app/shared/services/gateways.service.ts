import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GatewaysService {

  private readonly apiUrl: string = environment.apiUrl;
  private endpoint: string;

  constructor( private http: HttpClient ) { }

  /**Setting endpoint */
  setEndpointUrl (url: string): void {
    this.endpoint = `${this.apiUrl}${url}`;
  }

  /**Getting endpoint */
  getEndpointUrl (): string {
    return this.endpoint;
  }

  /** Get items */
  getItems (): Observable<any[]> {
    return this.http.get<any[]>(this.endpoint)
      .pipe(
        catchError (error => this.handleError(error))
      );
  }

  /** Get item by id */
  getItemById (id): Observable<any> {
    return this.http.get<any>( `${this.endpoint}/${id}`)
      .pipe(
        catchError (error => this.handleError(error))
      )
  }

  /** Create new item */
  createItem ( entity ): Observable<any> {
    return this.http.post<any>(this.endpoint, entity)
      .pipe(
        catchError (error => this.handleError(error))
      )
  }

  /** Update item */
  updateItem ( entity, id ): Observable<any> {
    return this.http.put<any>(`${this.endpoint}/${id}`, entity)
      .pipe(
        catchError (error => this.handleError(error))
      )
  }

  /** Delete item */
  deleteItem ( id ): Observable<any> {
    return this.http.delete<any>(`${this.endpoint}/${id}`)
      .pipe(
        catchError (error => this.handleError(error))
      )
  }

  private handleError(error: HttpErrorResponse) {
      return throwError(error);
  }
}
