import { Injectable } from '@angular/core';
import { Services } from '../domain/services';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  services: Services[] = [];
  filterServices: Services[] = [];

  constructor(private http: HttpClient) {
    this.loandServices();
  }
  private loandServices(): Observable<Services[]> {
    return this.http.get<Services[]>('../../assets/services.json');
  }
  loandServicesInit(): Observable<Services[]> {
    return this.loandServices();
  }
  async loanWithServiceCategory(category: string): Promise<Services[]> {
    this.filterServices = [];
    this.loandServices().subscribe((data: Services[]) => {
      this.services = data;
    });

    this.services.filter((element) => {
      if (element.category === category) {
        console.log(element);
        this.filterServices.push(element);
      }
    });
    console.log(this.filterServices);
    return this.filterServices;
  }
}
