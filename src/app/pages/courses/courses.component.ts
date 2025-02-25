import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import data from '../../../data/data.json';

@Component({
  selector: 'app-courses',
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit{
  courses = data.courses;

  ngOnInit(): void {
    console.log(this.courses);
  }
}
