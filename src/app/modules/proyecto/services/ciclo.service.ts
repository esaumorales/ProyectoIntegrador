import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Ciclo } from 'src/app/models/Ciclo';

@Injectable({
  providedIn: 'root'
})

export class CicloService {

  private url: string = 'http://localhost:8085/ciclo';

  constructor(private http: HttpClient) { }
  listar(): Observable<Ciclo[]> {
    return this.http.get<Ciclo[]>(this.url + '/all');
  }

  crear(ciclo: Ciclo): Observable<Object>{
    return this.http.post<Ciclo>(this.url +'/add' , ciclo);
  }

  editar(id: number, ciclo: Ciclo) : Observable<Object>{
    return this.http.put(this.url + '/edit/' + id, ciclo);
  }
  
  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDciclo(id: Ciclo) {
    this.http.get(this.url + '/' + id);
  }
}
