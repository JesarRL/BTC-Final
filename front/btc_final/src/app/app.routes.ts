import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { EncuentranosComponent } from './components/encuentranos/encuentranos.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ComparativaComponent } from './components/comparativa/comparativa.component'
import { CatalogocompletoComponent } from './components/catalogocompleto/catalogocompleto.component'

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: "Inicio", component: InicioComponent },
    { path: "encuentranos", component: EncuentranosComponent },
    { path: "comparativa", component: ComparativaComponent },
    { path: "catalogo", component: CatalogoComponent },
    { path: "catalogo-completo", component: CatalogocompletoComponent}
];

