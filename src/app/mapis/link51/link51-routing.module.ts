import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link51Page } from './link51.page';

const routes: Routes = [
  {
    path: '',
    component: Link51Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link51PageRoutingModule {}
