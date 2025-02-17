import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { ExperienceComponent } from "../experience/experience.component";
import { ProyectsComponent } from "../proyects/proyects.component";
import { TechnologiesComponent } from "../technologies/technologies.component";

@Component({
  selector: 'app-home',
  imports: [AboutComponent, ExperienceComponent, ProyectsComponent, TechnologiesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
