import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonIcon, IonButtons, IonMenuButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-sumadora',
  templateUrl: './sumadora.page.html',
  styleUrls: ['./sumadora.page.scss'],
  standalone: true,
  imports: [CommonModule,FormsModule,IonContent,IonHeader,IonTitle,IonToolbar,IonCard,IonCardHeader,IonCardTitle,IonCardContent,IonItem,IonInput,IonButton,IonIcon,IonButtons,IonMenuButton
  ],
})
export class SumadoraPage implements OnInit {

  //Variables
  numero1: number | null = null;
  numero2: number | null = null
  resultado: number | null = null;


  constructor() { }

  ngOnInit() {
  }

  sumarNumeros() {

    if (this.numero1 != null && this.numero2 != null) {
      this.resultado = +this.numero1 + +this.numero2;
    } else {
      this.resultado = null;
    }


  }

}
