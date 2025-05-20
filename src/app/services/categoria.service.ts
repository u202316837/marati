import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private readonly http: HttpClient
  ) { }

  obtenerCategoria(id_categoria: string) {
    return this.http.get("https://koo9h7kg4l.execute-api.us-east-1.amazonaws.com/v1/categoria?id_categoria=" + id_categoria, {
      responseType: "json"
    });
  }
}