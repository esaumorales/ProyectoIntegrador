import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Alumno } from 'src/app/models/Alumno';

@Injectable({
  providedIn: 'root'
})
export class IntegrantesService {

  private url: string = 'http://localhost:8085/alumno';

  constructor(private http: HttpClient) { }
  listar(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.url + '/all');
  }

  crear(alumno: Alumno){
    return this.http.post<string>(this.url +'/add' , alumno);
  }

  editar(alumno: Alumno) {
    return this.http.put(this.url, Alumno);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDalumno(id: Alumno) {
    this.http.get(this.url + '/' + id);
  }
}
