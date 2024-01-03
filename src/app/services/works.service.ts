import { Injectable } from '@angular/core';
import { WorkInt } from '../domain/worksInt';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class WorksService {
  //private worksUrl = require('../../assets/works.json');
  works: WorkInt[] = [];
  filterWorks: WorkInt[] = [];

  constructor(private http: HttpClient) {
    this.loadWorks();
  }

  private loadWorks(): WorkInt[] {
    this.http.get('../../assets/works.json').subscribe((data: any) => {
      this.works = data;
    });
    this.works.forEach((element) => {
      console.log(element);
    });

    return this.works;
  }
  loadWokrs() {
    return this.works;
  }
  loadWithCategory(category: string): WorkInt[] {
    this.filterWorks = [];

    this.works.filter((element) => {
      if (element.categoria === category) {
        console.log(element);
        this.filterWorks.push(element);
      }
    });

    console.log(this.filterWorks);
    return this.filterWorks;
  }
}
