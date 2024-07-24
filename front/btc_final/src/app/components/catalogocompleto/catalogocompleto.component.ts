import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-catalogocompleto',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './catalogocompleto.component.html',
    styleUrl: './catalogocompleto.component.css'
})
export class CatalogocompletoComponent {

    catalogo: any

    constructor(private _apiService: ProductoService, private router: Router) { }

    ngOnInit(): void {
        this.obtenerVehiculos()
    }


    obtenerVehiculos() {
        this._apiService.getCamionetas().subscribe((data: any) => {

            this.catalogo = data.camionetaData
            console.log("catalogo: ", this.catalogo)

        })


    }


}


