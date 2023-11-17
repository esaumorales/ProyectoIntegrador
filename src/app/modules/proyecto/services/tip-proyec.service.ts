import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

import { Tip_proyec } from 'src/app/models/Tip_proyect';

@Injectable({
  providedIn: 'root'
})

export class TipProyecService {

  private url: string = 'http://localhost:8085/tip_proyec';

  constructor(private http: HttpClient) { }
  listar(): Observable<Tip_proyec[]> {
    return this.http.get<Tip_proyec[]>(this.url + '/all');
  }

  crear(tipproyec: Tip_proyec){
    return this.http.post<string>(this.url +'/add' , tipproyec);
  }

  editar(tipproyec: Tip_proyec) {
    return this.http.put(this.url, tipproyec);
  }
  
  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDtipproyec(id: Tip_proyec) {
    this.http.get(this.url + '/' + id);
  }
}
