import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.page.html',
  styleUrls: ['./experiencia.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCard, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class ExperienciaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
