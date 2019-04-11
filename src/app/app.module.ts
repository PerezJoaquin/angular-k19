import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { CargaComponent } from './components/carga/carga.component';
import { ListadoComponent } from './components/listado/listado.component';
import { ErrorComponent } from './components/error/error.component';
import { GrillaComponent } from './components/grilla/grilla.component';
import { FilaComponent } from './components/grilla/fila/fila.component';

import {HeroeServiceService} from './services/heroe-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CargaComponent,
    ListadoComponent,
    ErrorComponent,
    GrillaComponent,
    FilaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HeroeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
