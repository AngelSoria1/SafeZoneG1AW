import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Alerta } from '../models/Alerta';
import { Observable, Subject } from 'rxjs';
const base_url=environment.base;

@Injectable({
  providedIn: 'root',
})
export class AlertaService implements OnInit{

  private url = `${base_url}/alertas`;
  private listaCambio = new Subject<Alerta[]>();
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  list() {
    return this.http.get<Alerta[]>(this.url);
  }

  insert(a: Alerta): Observable<string> {
    return this.http.post(this.url, a, { responseType: 'text' });
  }

  setList(listaNueva: Alerta []) {
    this.listaCambio.next(listaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    return this.http.get<Alerta>(`${this.url}/${id}`);
  }
    update(a: Alerta) {
    return this.http.put(`${this.url}`, a, { responseType: 'text' });
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`,{ responseType: 'text' })
  }
  search(fe: Date) {
  const formattedDate = fe.toISOString().split('T')[0]; 
  const params = { f: formattedDate }; 
  return this.http.get<Alerta[]>(`${this.url}/busquedas`, { params });
  }
} 
