import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {
  @Output() sectionClicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  public onClick(sectionId: string) {
    this.sectionClicked.emit(sectionId);
  }
}
