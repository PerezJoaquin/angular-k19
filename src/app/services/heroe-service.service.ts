import { Heroe } from './../heroe';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroeServiceService {
  private lista: Array<Heroe>;
  private id = 0;
  private her: Heroe;
  constructor() {
    this.lista = [];
  }

  cargar(nam, sex, pow, ter){
//    this.lista.push({id:this.id, nombre: nam, sexo: sex, poder: pow, terreno: ter});
    this.her = new Heroe(this.id, nam, sex, pow, ter);
    console.log(this.her.nombre);
    console.log(nam);
    this.lista.push(this.her)
    console.log(this.lista);
    this.id++;
  }

  getListado(){
    return this.lista;
  }

}
