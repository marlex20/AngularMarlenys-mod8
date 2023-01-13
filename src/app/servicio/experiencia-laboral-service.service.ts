import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExperienciaLaboral } from '../model/experiencia-laboral';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaLaboralServiceService {

  URL = environment.URL + 'experienciaLaboral/';

  constructor(private httpClient: HttpClient) { }
  public lista(): Observable<ExperienciaLaboral[]> {  //array porque son varias experiencias
    return this.httpClient.get<ExperienciaLaboral[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<ExperienciaLaboral> {
    return this.httpClient.get<ExperienciaLaboral>(this.URL + `detail/${id}`)
  }

  public save(experienciaLaboral: ExperienciaLaboral): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', experienciaLaboral);
  }

  public update(id: number, experienciaLaboral: ExperienciaLaboral): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, experienciaLaboral);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
