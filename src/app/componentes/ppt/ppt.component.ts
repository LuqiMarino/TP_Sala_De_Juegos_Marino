import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera'

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {

  @Output() enviarJuego: EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego: JuegoPiedraPapelTijera;
  mensaje:string = "";
  constructor() { 
    this.nuevoJuego = new JuegoPiedraPapelTijera();
  }

  ngOnInit() {
  }

  Jugar(opcion:string){
    console.log("ENTRO A JUGAR");
    var rta = this.nuevoJuego.opcionMaquina; 
    //0: Piedra
    //1: Papel
    //2: Tijera

    switch(opcion){
      case "piedra":
          if (rta == 0){
            this.mensaje = "Empate";
          }
          else if (rta == 1){
            this.mensaje = "Ustéd perdio";
          }
          else{
            this.mensaje = "Ustéd ganó";
          }
          break;
      case "papel":
          if (rta == 0){
            this.mensaje = "Ustéd ganó";
          }
          else if (rta == 1){
            this.mensaje = "Empate";
          }
          else{
            this.mensaje = "Ustéd perdio";
          }
          break;  
      case "tijera":
          if (rta == 0){
            this.mensaje = "Ustéd perdio";
          }
          else if (rta == 1){
            this.mensaje = "Ustéd ganó";
          }
          else{
            this.mensaje = "Empate";
          }
          break; 
    }
    this.nuevoJuego = new JuegoPiedraPapelTijera();
  }

}
