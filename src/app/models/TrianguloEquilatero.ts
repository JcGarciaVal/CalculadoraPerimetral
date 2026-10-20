import { TrianguloEscaleno } from "./TrianguloEscaleno";

export class TrianguloEquilatero extends TrianguloEscaleno
{
    constructor(lado: number) { 
        super(lado, lado, lado); 
        this.nombre = 'Triángulo Equilátero'; 
    }

    override calcularPerimetro(): number { 
        return 3 * this.ladoA; 
    }
}