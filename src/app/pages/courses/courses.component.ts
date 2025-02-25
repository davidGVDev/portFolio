import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import data from '../../../data/data.json';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';

@Component({
  selector: 'app-courses',
  imports: [CommonModule, MatDialogModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  courses = data.courses;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    console.log(this.courses);
  }

  openCourseDialog(course: any): void {
    this.dialog.open(CourseDialogComponent, {
      data: course,
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '200ms',
      width: '50rem',
      maxWidth: '90vw',
      maxHeight: '90vh'
    });
  }
}
