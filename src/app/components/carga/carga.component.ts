import { HeroeServiceService } from './../../services/heroe-service.service';
import { Component, OnInit } from '@angular/core';
import { Datos } from './../../datos';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {
  myData: Datos = new Datos();
  nam = '';
  sex = '';
  pow = '';
  ter = '';
  constructor(private hserv: HeroeServiceService) { }

  ngOnInit() {
  }
  guardar(){
    this.hserv.cargar(this.nam, this.sex, this.pow, this.ter);
    //console.log(this.myData.getDatos());
  }
}
