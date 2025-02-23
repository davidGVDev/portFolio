import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import data from '../../../data/data.json';

@Component({
  selector: 'app-technologies',
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent implements OnInit{
  technologies = data.technologies;

  ngOnInit(): void {
    console.log(this.technologies);
  }
}
