import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() sectionClicked = new EventEmitter<string>();
  isButtonSelected1 = false;
  isButtonSelected2 = false;
  isButtonSelected3 = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  public onClick(sectionId: string) {
    this.isButtonSelected1 = false;
    this.isButtonSelected2 = false;
    this.isButtonSelected3 = false;

    switch (sectionId) {
      case 'works': {
        this.isButtonSelected1 = !this.isButtonSelected1;
        break;
      }
      case 'about': {
        this.isButtonSelected2 = !this.isButtonSelected2;
        break;
      }
      case 'contact': {
        this.isButtonSelected3 = !this.isButtonSelected3;
        break;
      }
      default: {
        this.isButtonSelected1 = false;
        this.isButtonSelected2 = false;
        this.isButtonSelected3 = false;
      }
    }
    this.sectionClicked.emit(sectionId);
    const navbarCollapse =
      this.el.nativeElement.querySelector('.navbar-collapse');
    this.renderer.removeClass(navbarCollapse, 'show');
  }
  ToggleNavBar(): void {
    const element: HTMLElement = document.getElementsByClassName(
      'navbar-toggler'
    )[0] as HTMLElement;
    if (element.getAttribute('aria-expanded') === 'true') {
      element.click();
    }
  }
}
