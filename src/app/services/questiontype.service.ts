import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionType } from '../models/question_type';

@Injectable({
  providedIn: 'root'
})
export class QuestiontypeService {

  baseUrl='http://localhost:8080/api/questiontypes'
  constructor(private http: HttpClient) { }
  
  getTypes(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl);
  }
  getTypeById(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  
}
