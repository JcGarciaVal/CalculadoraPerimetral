import { Component } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput, IonButton, IonImg, IonText } from '@ionic/angular'; 
import { Circulo } from '../../models/Circulo'; 
@Component({ 
  selector: 'app-circulo', 
  templateUrl: './circulo.component.html', 
  styleUrls: ['./circulo.component.scss'], 
  standalone: true, 
  imports: [ CommonModule, FormsModule, IonCard, IonCardHeader, 
    IonCardTitle, IonCardContent, IonItem, IonInput, IonButton, IonImg, IonText ] 
  }) 
export class CirculoComponent { 
  radioInput: number = 0; resultadoPerimetro: number | null = null; calcular(): void { 
    const miCirculo = new Circulo(this.radioInput); this.resultadoPerimetro = miCirculo.calcularPerimetro(); 
  } 
}