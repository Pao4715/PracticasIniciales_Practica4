import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  private baseUrl:string = environment.backend_Url;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
  constructor(
    private http: HttpClient
  ) { }

  //HANDLE ERROR
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Un error ha ocurrido:', error.error.message);
    } else {
      console.error(
      `Backend returned code ${error.status}, ` +
      `body was: `, error.error);
    }
    return throwError(error);
  };

  //REGISTROS
  public obtenerTodos() : Observable<any> {
    let url = `${this.baseUrl}publicacion`
    return this.http.get(url, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  //OBTENER PUBLICACION
  public obtenerUnaPublicacion(id:number) : Observable<any> {
    let url = `${this.baseUrl}publicacion/${id}`
    return this.http.get(url, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  //REGISTRAR PUBLICACION
  public registrar(data:any) : Observable<any> {
    let url = `${this.baseUrl}publicacion`
    return this.http.post(url, data, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

}