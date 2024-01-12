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
  maxItemsToShow = 10;
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
  loanFilterdWorks(category: string): Promise<WorkInt[]> {
    return new Promise<WorkInt[]>((resolve, reject) => {
      try {
        this.worksService.loadWorksInit().subscribe((data: WorkInt[]) => {
          // Filtra los elementos que coinciden con la categoría
          this.works = data.filter((element) => element.categoria === category);
          console.log(this.works);
          resolve(this.works); // Resuelve la promesa con los elementos filtrados
        });
      } catch (error) {
        console.error('Error:', error);
        reject(error); // Rechaza la promesa en caso de error
      }
    });
  }
}
