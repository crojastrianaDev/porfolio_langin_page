import { Component } from '@angular/core';
import { WorksService } from '../../services/works.service';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css',
})
export class WorksComponent {
  constructor(public worksService: WorksService) {}
}
