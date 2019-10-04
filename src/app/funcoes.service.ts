import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncoesService {

  constructor(private http: HttpClient) { }
  URL = 'http://127.0.0.1:5000/select';

  lista() {
    return this.http.get(this.URL)
  }

}
