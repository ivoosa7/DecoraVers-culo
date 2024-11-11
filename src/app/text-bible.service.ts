import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Versicule } from './Versicule';

@Injectable({
  providedIn: 'root'
})
export class TextBibleService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:3000/Versiculos'

  //1º Service
  getTextHolyBible(): Observable<Versicule[]>{
    return this.http.get<Versicule[]>(this.url)
  }

  //2º Service
  registerNewTextHolyBible(verses: Versicule): Observable<Versicule>{
    return this.http.post<Versicule>(this.url, verses)
  }

  //3º Service 
  updateTextHolyBible(verses: Versicule): Observable<Versicule>{
    return this.http.put<Versicule>(`${this.url}/${verses.id}`, verses)
  }

  //4º Service 
  getVersesById(id: Number): Observable<Versicule>{
    return this.http.get<Versicule>(`${this.url}/${id}`)
  }

}
