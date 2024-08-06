import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductoService } from '../../services/producto.service';

@Component({
    selector: 'app-catalogo',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './catalogo.component.html',
    styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {

    catalogo: any[] = [];
    catalogoFiltro: any[] = [];

    // Declarar las variables de los selectores como propiedades de clase
    combustible: any;
    marca: any;
    modelo: any;
    minCilindrada: any;
    maxCilindrada: any;
    minPrecio: any;
    maxPrecio: any;

    constructor(private _apiService: ProductoService, private router: Router) { }

    ngOnInit(): void {
        this.obtenerVehiculos();
        this.inicializarVariables(); // Inicializar las variables de los selectores
    }

    inicializarVariables() {
        // Inicializar las variables de los selectores
        this.combustible = document.querySelector("#selectCombustible");
        this.marca = document.querySelector("#selectMarca");
        this.modelo = document.querySelector("#selectModelo");
        this.minCilindrada = document.querySelector("#minCilindrada");
        this.maxCilindrada = document.querySelector("#maxCilindrada");
        this.minPrecio = document.querySelector("#minPrecio");
        this.maxPrecio = document.querySelector("#maxPrecio");
    }

    obtenerVehiculos() {
        this._apiService.getCamionetas().subscribe((data: any) => {
            this.catalogo = data.camionetaData;
            console.log("catalogo: ", this.catalogo);
            this.filtrarCatalogo();
        });
    }

    filtrarCatalogo() {
        this.catalogoFiltro = [];
        for (const carro of this.catalogo) {
            this.catalogoFiltro.push(carro);
        }
        this.combustible.value = ""
        this.marca.value = ""
        this.modelo.value = ""
        this.minCilindrada.value = ""
        this.maxCilindrada.value = ""
        this.minPrecio.value = ""
        this.maxPrecio.value = ""
    }

    BucarFiltros() {
        console.log(
            "lol"
        );

        this.catalogoFiltro = this.catalogo.filter(camioneta => {
            return (
                (this.combustible?.value === "" || camioneta.combustible === this.combustible?.value) &&
                (this.marca?.value === "" || camioneta.marca === this.marca?.value) &&
                (this.modelo?.value === "" || camioneta.year === parseInt(this.modelo?.value)) &&
                (this.minCilindrada?.value === "" || camioneta.cilindrada >= parseFloat(this.minCilindrada.value)) &&
                (this.maxCilindrada?.value === "" || camioneta.cilindrada <= parseFloat(this.maxCilindrada.value)) &&
                (this.minPrecio?.value === "" || camioneta.precio >= parseFloat(this.minPrecio.value)) &&
                (this.maxPrecio?.value === "" || camioneta.precio <= parseFloat(this.maxPrecio.value))
            );
        });

        console.log("Nuevo Array: ", this.catalogoFiltro);
    }

    pepe() {
        this.router.navigate(["/comparativa"]);
    }
}
