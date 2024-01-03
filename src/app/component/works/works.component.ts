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
  // init: boolean = true;
  constructor(public worksService: WorksService) {}

  ngOnInit(): void {
    // if (this.init) {
    this.loadWoks = [];
    this.worksService.loadWorksInit().subscribe((data: WorkInt[]) => {
      this.loadWoks = data;
    });
    // }
  }

  public onClick(category: string) {
    // this.init = false;
    console.log(category);
    this.loanFilterdWorks(category);
  }
  loanFilterdWorks(category: string): WorkInt[] {
    this.works = [];
    return (this.works = this.worksService.loadWithCategory(category));
  }
}
