import { Component } from '@angular/core';
import { WorksService } from '../../services/works.service';
import { WorkInt } from '../../domain/worksInt';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css',
})
export class WorksComponent implements OnInit {
  works: WorkInt[] = [];
  loadWoks: WorkInt[] = [];
  constructor(public worksService: WorksService) {}

  ngOnInit(): void {
    this.loadWoks = [];
    this.loadWoks = this.worksService.loadWokrs();
  }

  public onClick(category: string) {
    console.log(category);
    this.loanFilterdWorks(category);
  }
  loanFilterdWorks(category: string): WorkInt[] {
    this.works = [];
    return (this.works = this.worksService.loadWithCategory(category));
  }
}
