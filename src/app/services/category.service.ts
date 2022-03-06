import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private HttpClient: HttpClient) {
  }

  public getAllCategory(): Observable<any> {
    return this.HttpClient.get<any>('../../assets/category.json', { params: new HttpParams({}), observe: 'response' })
      .pipe(
        retry(3),
        catchError(this.handleError),
        tap((res) => { })
      );
  };

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknow error!;';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error :${error.error.message}`;
    } else {
      errorMessage = `Error : ${error.status} \nMessage :${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
