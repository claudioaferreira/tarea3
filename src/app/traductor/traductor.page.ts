import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonLabel,
  IonIcon,
  IonButtons,
  IonMenuButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.page.html',
  styleUrls: ['./traductor.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonInput,
    IonLabel,
    IonIcon,
    IonButtons,
    IonMenuButton
  ]
})
export class TraductorPage implements OnInit {

  numeroInput: number | null = null;
  numeroEnLetras: string = '';
  private unidades: string[] = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
  private decenasEspeciales: string[] = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
  private decenas: string[] = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];


  traducirNumeros(){
    if (this.numeroInput === null || this.numeroInput < 1 || this.numeroInput > 1000) {
      this.numeroEnLetras = '';
      return;
    }
    this.numeroEnLetras = this.convertir(this.numeroInput);
  }

  private convertir(num: number): string {
    if (num === 1000) return 'mil';
    if (num === 100) return 'cien';
    if (num === 0) return 'cero';

    let letras = '';

    // Centenas
    if (num >= 100) {
      const centena = Math.floor(num / 100);
      if (centena === 1) {
        letras += 'ciento ';
      } else {
        letras += ['doscientos ', 'trescientos ', 'cuatrocientos ', 'quinientos ', 'seiscientos ', 'setecientos ', 'ochocientos ', 'novecientos '][centena - 2];
      }
      num %= 100;
    }

    // Decenas
    if (num > 0) {
      if (num < 10) {
        letras += this.unidades[num];
      } else if (num < 20) {
        letras += this.decenasEspeciales[num - 10];
      } else {
        const decena = Math.floor(num / 10);
        letras += this.decenas[decena];
        const unidad = num % 10;
        if (unidad > 0) {
          if (decena === 2) {
            letras = letras.slice(0, -1) + 'i' + this.unidades[unidad];
          } else {
            letras += ' y ' + this.unidades[unidad];
          }
        }
      }
    }

    return letras.trim();
  }


  constructor() { }

  ngOnInit() {
  }

}
