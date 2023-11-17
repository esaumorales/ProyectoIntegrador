import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Proyecto } from 'src/app/models/Proyecto';

@Injectable({
  providedIn: 'root'
})

export class ListproyecGruposService {

  private url: string = 'http://localhost:8085/proyecto';

  constructor(private http: HttpClient) { }
  listar(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.url + '/all');
  }

  crear(proyecto: Proyecto){
    return this.http.post<string>(this.url +'/add' , proyecto);
  }

  editar(proyecto: Proyecto) {
    return this.http.put(this.url, proyecto);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDproyecto(id: Proyecto) {
    this.http.get(this.url + '/' + id);
  }

}
