import { Component } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, 
  IonInput, IonButton, IonText, IonSelect, IonSelectOption, 
  IonImg} 
  from '@ionic/angular'; 
import { TrianguloEscaleno } from '../../models/TrianguloEscaleno'; 
import { TrianguloEquilatero } from '../../models/TrianguloEquilatero'; 
@Component({ 
  selector: 'app-triangulo', 
  templateUrl: './triangulo.component.html', 
  styleUrls: ['./triangulo.component.scss'], 
  standalone: true, 
  imports: [ CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, 
    IonCardContent, IonItem, IonInput, IonButton, IonText, 
    IonSelect, IonSelectOption, IonImg ] 
  }) 
export class TrianguloComponent { 
  tipoTriangulo: string = 'escaleno'; ladoA: number = 0; ladoB: number = 0; ladoC: number = 0; 
  ladoEquilatero: number = 0; resultadoPerimetro: number | null = null; 
calcular(): void { if (this.tipoTriangulo === 'equilatero') {
  const miTriangulo = new TrianguloEquilatero(this.ladoEquilatero); 
  this.resultadoPerimetro = miTriangulo.calcularPerimetro(); 
} else {
  const miTriangulo = new TrianguloEscaleno(this.ladoA, this.ladoB, this.ladoC); 
  this.resultadoPerimetro = miTriangulo.calcularPerimetro(); 
} 
} 
}