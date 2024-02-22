import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
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

  @ViewChild('cardContainer') cardContainer: ElementRef | undefined;

  constructor(public servicesService: ServiceService) {}

  ngAfterViewInit(): void {
    this.adjustButtonPosition();
  }
  adjustButtonPosition(): void {
    const cardContainerHeight = this.cardContainer!.nativeElement.offsetHeight;
    console.log(cardContainerHeight);
    const buttons = document.querySelectorAll('.now');

    buttons.forEach((button: Element) => {
      const buttonElement = button as HTMLElement;
      const buttonHeight = buttonElement.offsetHeight; // Obtener la altura del botón

      buttonElement.style.top = 'calc(cardContainerHeight / 2 - buttonHeight)';
    });
  }
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
