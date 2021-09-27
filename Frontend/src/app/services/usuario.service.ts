import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
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

  //REGISTRAR USUARIO
  public obtenerTodos() : Observable<any> {
    let url = `${this.baseUrl}usuario`
    return this.http.get(url, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  //REGISTRAR USUARIO
  public obtenerUnUsuario(id:number) : Observable<any> {
    let url = `${this.baseUrl}usuario/${id}`
    return this.http.get(url, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  //REGISTRAR USUARIO
  public registrar(data:any) : Observable<any> {
    let url = `${this.baseUrl}usuario`
    return this.http.post(url, data, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  //LOGIN USUARIO
  public login(data:any) : Observable<any> {
    let url = `${this.baseUrl}login`
    return this.http.post(url, data, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  //ACTUALIZAR USUARIO
  public actualizar(data:any) : Observable<any> {
    let url = `${this.baseUrl}usuario/${data.id}`
    return this.http.put(url, data, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  //ACTUALIZAR USUARIO
  public actualizarContrasena(data:any) : Observable<any> {
    let url = `${this.baseUrl}actualizar_contrasena`
    return this.http.put(url, data, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

}