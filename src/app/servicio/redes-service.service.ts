import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Redes } from '../model/redes';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RedesServiceService {

  URL = environment.URL + 'redes/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Redes[]> { 
    return this.httpClient.get<Redes[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Redes> {
    return this.httpClient.get<Redes>(this.URL + `detail/${id}`)
  }

  public save(redes: Redes): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', redes);
  }

  public update(id: number, redes: Redes): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, redes);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

}
