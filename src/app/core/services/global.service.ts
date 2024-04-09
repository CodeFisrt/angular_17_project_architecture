import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    const hee = { 

    }
    return this.http.get(url)
  }
  post(url: string,obj: any) {
    return this.http.post(url,obj)
  }
}
  
