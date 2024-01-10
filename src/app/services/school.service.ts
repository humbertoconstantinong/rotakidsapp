import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { School } from '../interfaces/school';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient) { }

  createSchool(data: any){
    let token = localStorage.getItem('token') || '';
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` })
    };
    return this.http.post<any>('https://chegueimamaev1.onrender.com/api/escolas', data, httpOptions);
  }
  // token = localStorage.getItem('token')

  getAll():Observable<any>{
    let token = localStorage.getItem('token') || '';
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` })
    };
    return this.http.get<any>('https://chegueimamaev1.onrender.com/api/escolas',httpOptions);
  }
 
  getOne(id: any):Observable<any>{
    let token = localStorage.getItem('token') || '';
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` })
    };
    return this.http.get<any>(`https://chegueimamaev1.onrender.com/api/escolas/${id}`,httpOptions);
  }
 

  // createSchool(data: any):Observable<any>{
  //   let headers = new Headers();
  //   let token = localStorage.getItem('token') || '';
  //   headers.append('x-access-token', token);
  //   const httpOptions = {
  //     headers: new HttpHeaders({ 'x-access-token': token })
  //   };
  //   return this.http.post<any>('https://localhost:7193/', data, httpOptions);
  // }


}
