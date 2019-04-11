export class Datos {
  lista = [];
  id = 0;
  getDatos() {
    return this.lista/* = [{id: 0, nombre: 'Emlynn', sexo: 'M', poder: 'Possession', terreno: 'Agua'},
          {id: 1, nombre: 'Noach', sexo: 'F', poder: 'Super Maggots', terreno: 'Agua'},
          {id: 2, nombre: 'Aloisia', sexo: 'F', poder: 'Sharpshooting', terreno: 'Fuego'},
          {id: 3, nombre: 'Ryley', sexo: 'SD', poder: 'Communicate With Cities', terreno: 'Tierra'}]*/;
  }
  cargar(nam, sex, pow, ter){
    this.lista.push({id:this.id, nombre: nam, sexo: sex, poder: pow, terreno: ter});
    this.id++;
  }

}
