import { Component, OnInit, Input } from '@angular/core';
import { Datos } from './../../datos';
import { HeroeServiceService } from './../../services/heroe-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  //dt: Datos = new Datos();
  lista = []/*this.dt.getDatos()*/;
  //@Input() lista: Array<object>;
  constructor(private hserv: HeroeServiceService) {
    this.lista = hserv.getListado();
    console.log(this.lista);
  }
  ngOnInit() {
  }

}
