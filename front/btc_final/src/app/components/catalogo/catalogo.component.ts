import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductoService } from '../../services/producto.service';

@Component({
    selector: 'app-catalogo',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './catalogo.component.html',
    styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {


    dataVehiculos_gasolina: any


    dataVehiculos_diesel: any

    constructor(private _apiService: ProductoService, private router:Router) { }

    ngOnInit(): void {
        this.obtenerVehiculos("G")
        this.obtenerVehiculos("D")
    }

    obtenerVehiculos(tipoConsulta: any = "") {
        this._apiService.getCamionetas(tipoConsulta).subscribe((data: any) => {
            if (tipoConsulta == "G") {
                this.dataVehiculos_gasolina = data.camionetaData

                console.log("gasolina: ", this.dataVehiculos_gasolina);


            } else {
                this.dataVehiculos_diesel = data.camionetaData

                console.log("diesel: ", this.dataVehiculos_diesel);

            }
        })
    }
    pepe(){
        this.router.navigate(["/comparativa"])
    }
}

