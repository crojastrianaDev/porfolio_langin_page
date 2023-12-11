import { Routes } from '@angular/router';
import { LayoutComponent } from './component/layout/layout.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
