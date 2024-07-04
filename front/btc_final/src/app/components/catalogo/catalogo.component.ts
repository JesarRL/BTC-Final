import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../../services/producto.service';

@Component({
    selector: 'app-catalogo',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './catalogo.component.html',
    styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {

    dataVehiculos_slider1_gasolina: any = []
    dataVehiculos_slider2_gasolina: any = []
    dataVehiculos_slider3_gasolina: any = []

    dataVehiculos_slider1_diesel: any = []
    dataVehiculos_slider2_diesel: any = []
    dataVehiculos_slider3_diesel: any = []

    constructor(private _apiService: ProductoService) { }

    ngOnInit(): void {
        this.obtenerVehiculos("G")
        this.obtenerVehiculos("D")
    }

    obtenerVehiculos(tipoConsulta: any = "") {
        this._apiService.getCamionetas(tipoConsulta).subscribe((data: any) => {
            if (tipoConsulta == "G") {
                this.dataVehiculos_slider1_gasolina.push(data.camionetaData[0], data.camionetaData[1], data.camionetaData[2], data.camionetaData[3])
                this.dataVehiculos_slider2_gasolina.push(data.camionetaData[4], data.camionetaData[5], data.camionetaData[6], data.camionetaData[7])
                this.dataVehiculos_slider3_gasolina.push(data.camionetaData[8], data.camionetaData[9])
            } else {
                this.dataVehiculos_slider1_diesel.push(data.camionetaData[0], data.camionetaData[1], data.camionetaData[2], data.camionetaData[3])
                this.dataVehiculos_slider2_diesel.push(data.camionetaData[4], data.camionetaData[5], data.camionetaData[6], data.camionetaData[7])
                this.dataVehiculos_slider3_diesel.push(data.camionetaData[8], data.camionetaData[9])
            }
        })
    }
}

let botonComparar:any =  document.querySelector(".botonCompararCarrusel")

botonComparar?.addEventListener("click", ()=>{

    window.location.href = "https://www.youtube.com/watch?v=24_vzTySZTQ&ab_channel=NeiserCustodio"
})


let botonPrueba:any = document.querySelector("#botonPrueba")

console.log("boton consola: ", botonPrueba)
