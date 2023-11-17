import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Actividad_ejecu } from 'src/app/models/Actividad_ejecu';

@Injectable({
  providedIn: 'root'
})

export class ActividadEjecuService {

  private url: string = 'http://localhost:8085/actividad_ejecu';

  constructor(private http: HttpClient) { }
  listar(): Observable<Actividad_ejecu[]> {
    return this.http.get<Actividad_ejecu[]>(this.url + '/all');
  }

  crear(actividad_ejecu: Actividad_ejecu){
    return this.http.post<string>(this.url +'/add' , actividad_ejecu);
  }

  editar(actividad_ejecu: Actividad_ejecu) {
    return this.http.put(this.url, actividad_ejecu);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDActividad_ejecu(id: Actividad_ejecu) {
    this.http.get(this.url + '/' + id);
  }
}
