import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { EncuentranosComponent } from './components/encuentranos/encuentranos.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: "Inicio", component: InicioComponent },
  { path: "Encuentranos", component: EncuentranosComponent },
  { path: "Preguntas", component: PreguntasComponent }
  //{ path:}
];

