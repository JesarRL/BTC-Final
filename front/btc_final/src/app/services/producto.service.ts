import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProductoService {

    UrlApi: string = "http://localhost:3000/best-trucks-colombia"

    constructor(private http: HttpClient) { }

    getCamionetas(tipo: any = "") {
        if (tipo == "G") {
            return this.http.get(`${this.UrlApi}/vehiculos/listar-gasolina`)
        } else if (tipo == "D") {
            return this.http.get(`${this.UrlApi}/vehiculos/listar-diesel`)
        } else {
            return this.http.get(`${this.UrlApi}/vehiculos/listar-inventario`)
        }
    }


    getCamioneta(id:any){
        return this.http.get(`${this.UrlApi}/vehiculos/buscar_vehiculo/${id}`)
    }
}
