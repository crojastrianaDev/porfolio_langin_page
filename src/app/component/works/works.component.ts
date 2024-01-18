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
  isButtonSelected1 = false;
  isButtonSelected2 = false;
  isButtonSelected3 = false;
  isButtonSelected4 = false;
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
    this.isButtonSelected1 = false;
    this.isButtonSelected2 = false;
    this.isButtonSelected3 = false;
    this.isButtonSelected4 = false;
    switch (category) {
      case '1': {
        this.isButtonSelected1 = !this.isButtonSelected1;
        break;
      }
      case '2': {
        this.isButtonSelected2 = !this.isButtonSelected2;
        break;
      }
      case '3': {
        this.isButtonSelected3 = !this.isButtonSelected3;
        break;
      }
      case '4': {
        this.isButtonSelected4 = !this.isButtonSelected4;
        break;
      }
    }

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
