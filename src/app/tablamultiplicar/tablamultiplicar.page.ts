import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonIcon, IonButtons, IonMenuButton, IonList, IonListHeader } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calculatorOutline, calculatorSharp } from 'ionicons/icons';

@Component({
  selector: 'app-tablamultiplicar',
  templateUrl: './tablamultiplicar.page.html',
  styleUrls: ['./tablamultiplicar.page.scss'],
  standalone: true,
  imports: [IonListHeader, IonList, IonInput, CommonModule, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonButton, IonIcon, IonButtons, IonMenuButton, IonLabel],
})

export class TablamultiplicarPage {
  
  numero1: number | null = null;
  
  // Array para guardar los resultados de la tabla
  tablaResultados: { multiplicador: number, resultado: number }[] = [];

  constructor() {
    addIcons({ calculatorOutline, calculatorSharp });
  }

  generarTabla() {
    // 1. Validar que se haya ingresado un número
    if (this.numero1 === null || this.numero1 < 0) {
      this.tablaResultados = [];
      return;
    }

    // 2. Limpiar el array de resultados anterior
    this.tablaResultados = [];

    // 3. Crear la tabla con un for del 1 al 13
    for (let i = 1; i <= 13; i++) {
      this.tablaResultados.push({
        multiplicador: i,
        resultado: this.numero1 * i
      });
    }
  }
}
