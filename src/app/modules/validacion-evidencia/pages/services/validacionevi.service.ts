import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evidencia } from 'src/app/models/evidencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidacioneviService {

  private url : string = 'http://localhost:8085/proyecto';

  constructor(private http: HttpClient) { }

  listar(): Observable <Evidencia[]>{
    return this.http.get<Evidencia[]>(this.url + '/all');
  }
  crear(Evidencia: Evidencia){
    return this.http.post<string>(this.url +'/add' , Evidencia);
  }

  editar(Evidencia: Evidencia) {
    return this.http.put(this.url, Evidencia);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDevidencia(id: Evidencia) {
    this.http.get(this.url + '/' + id);
  }
}
