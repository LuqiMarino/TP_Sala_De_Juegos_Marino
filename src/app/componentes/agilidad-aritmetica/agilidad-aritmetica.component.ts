import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
   @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;
  private subscription: Subscription;
  ngOnInit() {
  }
   constructor() {
     this.ocultarVerificar=true;
     this.Tiempo=5; 
    this.nuevoJuego = new JuegoAgilidad();
    this.NuevoJuego();
  }

  NuevoJuego() {
    this.ocultarVerificar=false;
    this.nuevoJuego = new JuegoAgilidad();
    this.repetidor = setInterval(()=>{ 
      
      this.Tiempo--;
      //console.log("llego", this.Tiempo);
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar=true;
        this.Tiempo=5;
      }}, 900);

  }

  verificar()
  {
    this.ocultarVerificar=false;
    this.nuevoJuego.yaRespondio = true;
    clearInterval(this.repetidor);
    
    var rta = parseInt(this.nuevoJuego.numeroIngresado);

    switch(this.nuevoJuego.operador){
      case "+":
          if (this.nuevoJuego.numero1 + this.nuevoJuego.numero2 == rta){
            this.nuevoJuego.gano = true;
          }
          else
            this.nuevoJuego.gano = false;
          break;
        case "+":
          if (this.nuevoJuego.numero1 - this.nuevoJuego.numero2 == rta){
            this.nuevoJuego.gano = true;
          }
          else
            this.nuevoJuego.gano = false;
            break;
    }   
  }  

}
