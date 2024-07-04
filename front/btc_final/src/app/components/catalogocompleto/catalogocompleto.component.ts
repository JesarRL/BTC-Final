import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-catalogocompleto',
  standalone: true,
  imports: [],
  templateUrl: './catalogocompleto.component.html',
  styleUrl: './catalogocompleto.component.css'
})
export class CatalogocompletoComponent {
    constructor(private _apiService: ProductoService){}

    ngOnInit(): void{
        this.obtenerVehiculos()
    }

    obtenerVehiculos(){
        this._apiService.getCamionetas().subscribe((data: any) => {
            console.log(data)
        })


    }


}
