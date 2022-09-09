import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link25Page } from './link25.page';

const routes: Routes = [
  {
    path: '',
    component: Link25Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link25PageRoutingModule {}
