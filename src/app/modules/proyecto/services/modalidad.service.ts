import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Modalidad } from 'src/app/models/Modalidad';

@Injectable({
  providedIn: 'root'
})

export class ModalidadService {

  private url: string = 'http://localhost:8085/modalidad';

  constructor(private http: HttpClient) { }
  listar(): Observable<Modalidad[]> {
    return this.http.get<Modalidad[]>(this.url + '/all');
  }

  crear(modalidad: Modalidad): Observable<Object>{
    return this.http.post<Modalidad>(this.url +'/add' , modalidad);
  }

  editar(id: number, modalidad: Modalidad) : Observable<Object>{
    return this.http.put(this.url + '/edit/' + id, modalidad);
  }
  
  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDcoordinador(id: Modalidad) {
    this.http.get(this.url + '/' + id);
  }
}
