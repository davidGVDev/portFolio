import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-course-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>{{ data.alt }}</h2>
    <img [src]="data.path" [alt]="data.alt">
  `
})
export class CourseDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
} 