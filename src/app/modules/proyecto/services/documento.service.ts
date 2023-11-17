import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

import { Documento } from 'src/app/models/documento';

@Injectable({
  providedIn: 'root'
})

export class DocumentoService {

  private url: string = 'http://localhost:8085/documento';

  constructor(private http: HttpClient) { }
  listar(): Observable<Documento[]> {
    return this.http.get<Documento[]>(this.url + '/all');
  }

  crear(documento: Documento): Observable<Object>{
    return this.http.post<Documento>(this.url +'/add' , documento);
  }

  editar(id: number, documento: Documento) : Observable<Object>{
    return this.http.put(this.url + '/edit/' + id, documento);
  }
  
  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDcoordinador(id: Documento) {
    this.http.get(this.url + '/' + id);
  }
}
