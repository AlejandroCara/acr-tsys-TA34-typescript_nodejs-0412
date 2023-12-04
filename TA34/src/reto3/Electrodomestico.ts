export class Electrodomestico {

    private static readonly DEFAUL_PRECIO_BASE: number = 100;
    private static readonly DEFAUL_COLOR: string = "blanco";
    private static readonly DEFAULT_PESO: number = 5;
    private static readonly DEFAUL_CONSUMO: string = "F";

    protected precioBase: number = Electrodomestico.DEFAUL_PRECIO_BASE;
    protected color: string = Electrodomestico.DEFAUL_COLOR;
    protected consumo: string = Electrodomestico.DEFAUL_CONSUMO;
    protected peso: number = Electrodomestico.DEFAULT_PESO;

    constructor(precioBase?: number, color?: string, consumo?: string, peso?: number){
        if (typeof precioBase !== 'undefined') {
            this.precioBase = precioBase;
        }

        this.comprobarColor(color);

        this.comprobarConsumoEnergetico(consumo);

        if (typeof peso !== 'undefined') {
            this.peso = peso;
        }
    }

    getPrecioBase = (): number => {
        return this.precioBase;
    }

    getColor = (): string => {
        return this.color;
    }

    getConsumo = (): string => {
        return this.consumo;
    }

    getPseo = (): number => {
        return this.peso;
    }

    private comprobarConsumoEnergetico = (letra?: string): void => {
        if(typeof letra !== 'undefined' && (letra.toUpperCase() == "A" || 
                                            letra.toUpperCase() == "B" || 
                                            letra.toUpperCase() == "C" || 
                                            letra.toUpperCase() == "D" || 
                                            letra.toUpperCase() == "E" || 
                                            letra.toUpperCase() == "F")) {
            this.consumo = letra.toUpperCase();
        }
    }

    private comprobarColor = (color?: string): void => {
        if(typeof color !== 'undefined' &&  (color.toLowerCase() == "blanco" || 
                                             color.toLowerCase() == "negro" || 
                                             color.toLowerCase() == "marron" || 
                                             color.toLowerCase() == "rojo")) {
            this.color = color;
        }
    }

    public precioFinal(): number {
        let precio = this.precioBase;
        if(this.consumo == "A"){
            precio += 100;
        } else if (this.consumo == "B"){
            precio += 80;
        } else if (this.consumo == "C"){
            precio += 60;
        } else if (this.consumo == "D"){
            precio += 50;
        } else if (this.consumo == "E"){
            precio += 30;
        } else if (this.consumo == "F"){
            precio += 10;
        }

        if(this.peso >= 0 && this.peso <= 19){
            precio += 10;
        } else if (this.peso >= 20 && this.peso <= 49) {
            precio += 50;
        } else if (this.peso >= 50 && this.peso <= 79) {
            precio += 80;
        } else if (this.peso >= 80) {
            precio += 100;
        }

        return precio;
    }
}