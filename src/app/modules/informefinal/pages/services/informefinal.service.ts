


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Informefinal } from 'src/app/models/informefinal';


@Injectable({
  providedIn: 'root'
})
export class InformefinalService {

  private url : string = 'http://localhost:8085/informe_final';

  constructor(private http: HttpClient) { }

  listar(): Observable <Informefinal[]>{
    return this.http.get<Informefinal[]>(this.url + '/all');
  }
  crear(informefinal: Informefinal){
    return this.http.post<string>(this.url +'/add' , informefinal);
  }

  editar(informefinal: Informefinal) {
    return this.http.put(this.url, informefinal);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDinformefinal(id: Informefinal) {
    this.http.get(this.url + '/' + id);
  }
}
