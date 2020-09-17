export class JuegoAnagrama {
    palabras = ['automovil', 'futbol', 'diccionario', 'zapato', 'computadora', 'jirafa', 'heladera', 'gorila', 'control', 'teclado'];
    palabra = this.palabras[Math.floor(Math.random() * this.palabras.length)];
    nombre = "Anagrama";
    gano = false;
    yaRespondio = false;
    palabraDesordenada = this.DesordenarPalabra();
    palabraIngresada = "";

    DesordenarPalabra(){
        var i = 0;
        var nuevaPalabra = [];
        var retorno = "";
        
        for(var x = 0; x<this.palabra.length; x++){
            nuevaPalabra[x] = this.palabra[x];
        }

        for(i=0; i<this.palabra.length; i++){
            var aux = nuevaPalabra[i];
            var j = Math.floor(Math.random() * nuevaPalabra.length);
            nuevaPalabra[i] = nuevaPalabra[j];
            nuevaPalabra[j] = aux;
        }

        for(i=0; i<this.palabra.length; i++){
            var aux = nuevaPalabra[i];
            var j = Math.floor(Math.random() * nuevaPalabra.length);
            nuevaPalabra[i] = nuevaPalabra[j];
            nuevaPalabra[j] = aux;
        }

        for(i=0; i<this.palabra.length; i++){
            var aux = nuevaPalabra[i];
            var j = Math.floor(Math.random() * nuevaPalabra.length);
            nuevaPalabra[i] = nuevaPalabra[j];
            nuevaPalabra[j] = aux;
        }

        for(var x = 0; x<this.palabra.length; x++){
            retorno += nuevaPalabra[x];
        }
        return retorno;
    }

}
