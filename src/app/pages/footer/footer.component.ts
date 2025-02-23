import { Component, OnInit } from '@angular/core';
import data from '../../../data/data.json'; 
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  socials = data.socials;
  ngOnInit(): void {
    console.log(this.socials);
  }
}
