import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Escu_prof } from 'src/app/models/Escu_prof';

@Injectable({
  providedIn: 'root'
})

export class EscuelaService {

  private url: string = 'http://localhost:8085/escuela_profesional';

  constructor(private http: HttpClient) { }
  listar(): Observable<Escu_prof[]> {
    return this.http.get<Escu_prof[]>(this.url + '/all');
  }

  crear(escu_prof: Escu_prof): Observable<Object>{
    return this.http.post<Escu_prof>(this.url +'/add' , escu_prof);
  }

  editar(id: number, escu_prof: Escu_prof) : Observable<Object>{
    return this.http.put(this.url + '/edit/' + id, escu_prof);
  }
  
  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDescu_prof(id: Escu_prof) {
    this.http.get(this.url + '/' + id);
  }
}
