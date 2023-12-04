import { Electrodomestico } from "./Electrodomestico";

export class Television extends Electrodomestico {

    resolucion: number = 20;
    ultraHD: boolean = false;

    constructor(precioBase?: number, color?: string, consumo?: string, peso?: number, resolucion?: number, ultraHD?: boolean) {
        super();

        if (typeof resolucion !== 'undefined') {
            this.resolucion = resolucion;
        }

        if (typeof ultraHD !== 'undefined') {
            this.ultraHD = ultraHD;
        }
    }

    public getResolucion =  (): number => {
        return this.resolucion;
    }

    public isgetUltraHD = (): boolean => {
        return this.ultraHD;
    }

    public precioFinal = (): number => {
        let precio = super.precioFinal();

        if (this.resolucion > 40) {
            precio += precio * 0.3;
        }

        if (this.ultraHD) {
            precio += 50;
        }

        return precio;
    }

    
}