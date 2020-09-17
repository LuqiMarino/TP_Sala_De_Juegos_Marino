export class JuegoAgilidad {
    numero1 = Math.floor(Math.random() * 10);
    numero2 = Math.floor(Math.random() * 10);
    operador = this.setOperador();
    numeroIngresado = '';
    gano = false;
    yaRespondio = false;

    setOperador(){
        var random = Math.floor(Math.random() * 2);
        if (random == 0)
            return "+";
        return "-";
    }
}
