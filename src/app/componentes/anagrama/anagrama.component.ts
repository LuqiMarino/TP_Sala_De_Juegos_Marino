import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama'

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  nuevoJuego:JuegoAnagrama;
  Mensajes:string;
  ocultarVerificar:boolean;
  Tiempo: number;
  repetidor:any;
  pulsoEnviar = false;
  
  constructor() { 
    this.ocultarVerificar=true;
    this.Tiempo=15; 
    this.nuevoJuego = new JuegoAnagrama();
    this.NuevoJuego();
    
  }

  ngOnInit() {
  }

  NuevoJuego() {
    this.ocultarVerificar=false;
    this.nuevoJuego = new JuegoAnagrama();
    this.Tiempo=15; 
    this.repetidor = setInterval(()=>{       
      this.Tiempo--;
      if(this.Tiempo==0 || this.pulsoEnviar) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar=true;
        this.Tiempo=15;
      }}, 900);

  }

  verificar()
  {
    console.log("entro a verif");
    this.ocultarVerificar=false;
    this.nuevoJuego.yaRespondio = true;
    clearInterval(this.repetidor);

    if (this.nuevoJuego.palabraIngresada === this.nuevoJuego.palabra){
      this.nuevoJuego.gano = true;
      this.nuevoJuego.palabraIngresada = "";
    }
    else{
      this.nuevoJuego.gano = false;
      this.nuevoJuego.palabraIngresada = "";
    }
    
  }
  
  enviar(){
    this.pulsoEnviar = true;
  }

}
