import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-course-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-dialog.component.html',
  styleUrl: './course-dialog.component.css',
})
export class CourseDialogComponent {
  constructor(
    public dialog: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log('Dialog Data:', this.data);
  }

  closeDialog(): void {
    this.dialog.close();
  }
}
