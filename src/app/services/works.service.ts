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
    console.log(this.works);
    return this.works;
  }
  private loadWithCategory(category: string) {
    this.works.forEach((element) => {
      if (element.categoria === category) {
        this.filterWorks.push(element);
      }
    });
  }
}
