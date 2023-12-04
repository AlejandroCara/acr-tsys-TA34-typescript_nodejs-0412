import { Electrodomestico } from "./Electrodomestico";

export class Lavadora extends Electrodomestico {

    private static readonly DEFAULT_CARGA = 5;

    private carga: number = Lavadora.DEFAULT_CARGA;

    constructor(precioBase?: number, color?: string, consumo?: string, peso?: number, carga?: number){
        super(precioBase, color, consumo, peso);
        if (typeof carga !== "undefined") {
            this.carga = carga;
        }
    }

    public getCarga = (): number => {
        return this.carga;
    }

    public precioFinal = (): number => {
        let precio: number = super.precioFinal();

        if (this.carga > 30) {
            precio += 50;
        }
        return precio;
    }
}