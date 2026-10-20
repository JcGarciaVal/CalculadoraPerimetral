import { FiguraGeometrica } from './FiguraGeometrica';
export class TrianguloEscaleno extends FiguraGeometrica 
{ 
    constructor( public ladoA: number, public ladoB: number, public ladoC: number ) { super('Triángulo Escaleno'); } 
    
    calcularPerimetro(): number { 
        return this.ladoA + this.ladoB + this.ladoC; 
    } 
}