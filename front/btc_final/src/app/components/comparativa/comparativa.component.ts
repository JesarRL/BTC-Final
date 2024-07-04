import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../../services/producto.service';

@Component({
    selector: 'app-comparativa',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './comparativa.component.html',
    styleUrl: './comparativa.component.css'
})
export class ComparativaComponent {
    lista1:any = []
    lista2:any = []
    infoVehiculo1:any
    infoVehiculo2:any
    constructor(private _api: ProductoService){}

    consultarInfoLista1(tipoConsulta:any){
        this._api.getCamionetas(tipoConsulta.target.value).subscribe((data:any) => {
            this.lista1 = data.camionetaData
        })
    }

    consultarInfoLista2(tipoConsulta:any){
        this._api.getCamionetas(tipoConsulta.target.value).subscribe((data:any) => {
            this.lista2 = data.camionetaData
        })
    }

    alimentarRow1Comparativa(evento:any){
        this._api.getCamioneta(evento.target.value).subscribe((data:any) => {
            this.infoVehiculo1 = data.camionetaData
            console.log(this.infoVehiculo1);
        })
    }

    alimentarRow2Comparativa(evento:any){
        this._api.getCamioneta(evento.target.value).subscribe((data:any) => {
            this.infoVehiculo2 = data.camionetaData
            console.log(this.infoVehiculo2);
        })
    }
}
