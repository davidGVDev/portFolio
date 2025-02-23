import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import data from '../../../data/data.json';
import successAnimation from '../../../data/success.json';

import lottie from 'lottie-web';
import { AnimationItem } from 'lottie-web';
import { AnimationConfigWithData } from 'lottie-web';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent implements OnInit {
  experiences = data.experiences;

  ngOnInit(): void {
    console.log(this.experiences);
    this.loadAnimation();
  }

  loadAnimation(): void {
    const container = document.getElementById('lottie-container');
    if (!container) {
      console.error('Contenedor no encontrado');
      return;
    }

    const animationConfig: AnimationConfigWithData = {
      container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: successAnimation // Aquí pasamos directamente el JSON importado
    };

    const anim: AnimationItem = lottie.loadAnimation(animationConfig);
  }
}
