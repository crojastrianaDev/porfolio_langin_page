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

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  public onClick(sectionId: string) {
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
