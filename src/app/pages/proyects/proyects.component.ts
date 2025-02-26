import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from '@coreui/angular';
import data from '../../../data/data.json';
@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule
  ],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.css'
})
export class ProyectsComponent implements OnInit {
  proyects = data.proyects;
 

  ngOnInit() {
    fetch('../../data/data.json')
      .then(response => response.json())
      .then(data => {
        this.proyects = data.proyects;
      });
  }
}
