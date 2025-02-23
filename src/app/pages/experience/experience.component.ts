import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import data from '../../../data/data.json';


@Component({
  selector: 'app-experience',
  imports: [CommonModule,],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit{
  experiences = data.experiences;

  ngOnInit(): void {
    console.log(this.experiences);
  }


}
