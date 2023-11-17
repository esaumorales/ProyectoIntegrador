import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Coordinador } from 'src/app/models/Coordinador';

@Injectable({
  providedIn: 'root'
})

export class CoordinadorService {

  private url: string = 'http://localhost:8085/coordinador';

  constructor(private http: HttpClient) { }
  listar(): Observable<Coordinador[]> {
    return this.http.get<Coordinador[]>(this.url + '/all');
  }

  crear(coordinador: Coordinador): Observable<Object>{
    return this.http.post<Coordinador>(this.url +'/add' , coordinador);
  }

  editar(id: number, coordinador: Coordinador) : Observable<Object>{
    return this.http.put(this.url + '/edit/' + id, coordinador);
  }
  
  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDcoordinador(id: Coordinador) {
    this.http.get(this.url + '/' + id);
  }
}
