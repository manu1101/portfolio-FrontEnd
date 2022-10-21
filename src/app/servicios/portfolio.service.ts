import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  url: string = 'http://localhost:8080/';
  constructor(private htttp: HttpClient) {}

  obtenerDatos(): Observable<any> {
    return this.htttp.get<any>(this.url + 'api/login/iniciar-sesion');
  }
}