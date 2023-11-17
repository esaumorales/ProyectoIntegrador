import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Proyecto } from 'src/app/models/Proyecto';

@Injectable({
  providedIn: 'root'
})

export class ProyectoService {

  private url: string = 'http://localhost:8085/proyecto';

  constructor(private http: HttpClient) { }
  listar(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.url + '/all');
  }

  crear(proyecto: Proyecto): Observable<Object>{
    return this.http.post<Proyecto>(this.url +'/add' , proyecto);
  }

  editar(id: number, proyecto: Proyecto) : Observable<Object>{
    return this.http.put(this.url + '/edit/' + id, proyecto);
  }
  
  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDproyecto(id: number): Observable<any> {
    return this.http.get<Proyecto>(this.url + '/' + id);
  }
}
