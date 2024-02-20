import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Services } from '../../domain/services';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  services: Services[] = [];
  loanServices: Services[] = [];
  maxItemsToShow = 2;
  isButtonSelected1 = true;
  isButtonSelected2 = false;
  isButtonSelected3 = false;
  constructor(public servicesService: ServiceService) {}
  ngOnInit(): void {
    this.loanServices = [];
    this.servicesService.loandServicesInit().subscribe((data: Services[]) => {
      this.loanServices = data;
    });
  }

  public onClick(category: string) {
    this.isButtonSelected1 = false;
    this.isButtonSelected2 = false;
    this.isButtonSelected3 = false;
    switch (category) {
      case 'lDS': {
        this.isButtonSelected1 = !this.isButtonSelected1;
        break;
      }
      case 'SM': {
        this.isButtonSelected2 = !this.isButtonSelected2;
        break;
      }
      case 'oTDs': {
        this.isButtonSelected3 = !this.isButtonSelected3;
        break;
      }
    }

    this.loanFilterdService(category);
  }
  loanFilterdService(category: String): Promise<Services[]> {
    return new Promise<Services[]>((resolve, reject) => {
      try {
        this.servicesService
          .loandServicesInit()
          .subscribe((data: Services[]) => {
            this.services = data.filter(
              (element: Services) => element.category === category
            );
            resolve(this.services);
          });
      } catch (error) {
        console.log('Error: ', error);
        reject(error);
      }
    });
  }
}
