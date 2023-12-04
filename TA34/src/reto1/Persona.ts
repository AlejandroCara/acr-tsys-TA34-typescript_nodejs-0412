export class Persona {

    private static readonly SEXO_DEFECTO: string = "H";

    public nombre: string = "";
    public edad: number = 0;
    public dni: string = "";
    public sexo: string = Persona.SEXO_DEFECTO;

    constructor(nombre: string, edad: number, dni: string, sexo: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
    }
}