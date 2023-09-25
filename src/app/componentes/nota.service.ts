import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nota } from './nota';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:3000/notas';

  listar() {
    return this.http.get<Nota[]>(this.API)
  }

}


