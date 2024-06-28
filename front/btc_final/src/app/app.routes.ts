import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { EncuentranosComponent } from './components/encuentranos/encuentranos.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: "Inicio", component: InicioComponent },
  { path: "encuentranos", component: EncuentranosComponent }
  //{ path:}
];

