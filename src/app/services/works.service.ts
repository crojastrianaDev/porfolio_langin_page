import { Injectable } from '@angular/core';
import { WorkInt } from '../domain/worksInt';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  private loadWorks(): Observable<WorkInt[]> {
    return this.http.get<WorkInt[]>('../../assets/works.json');
    // this.http.get('../../assets/works.json').subscribe((data: any) => {
    //   this.works = data;
    // });
    // this.works.forEach((element) => {
    //   console.log(element);
    // });

    // return this.works;
  }
  loadWorksInit(): Observable<WorkInt[]> {
    return this.loadWorks();
  }
  async loadWithCategory(category: string): Promise<WorkInt[]> {
    this.filterWorks = [];
    this.loadWorks().subscribe((data: WorkInt[]) => {
      this.works = data;
    });

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
