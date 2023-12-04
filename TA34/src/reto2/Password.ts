export class Password {

    private longitud: number;
    private contrasena: string = "";

    constructor(longitud?: number){
        if (typeof longitud !== 'undefined') {
            this.longitud = longitud;
        } else {
            this.longitud = 8;
        }

        this.generate();
    }

    generate = () : void => {

        for (let i = 0; i < this.longitud; i++) {
            this.contrasena += String.fromCharCode(Math.floor(Math.random() * (122 - 48 + 1)) + 48);
        }
    } 

    getContrasena = () : string => {
        return this.contrasena;
    }
}