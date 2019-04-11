import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { CargaComponent } from './components/carga/carga.component';
import { ListadoComponent } from './components/listado/listado.component';
import { ErrorComponent } from './components/error/error.component';
// tslint:disable: quotemark
const routes: Routes = [
  {path: "menu", component: MenuComponent},
  {path: "home", component: HomeComponent},
  {path: "carga", component: CargaComponent},
  {path: "listado", component: ListadoComponent},
  {path: "**", component: ErrorComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
