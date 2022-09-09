import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link58Page } from './link58.page';

const routes: Routes = [
  {
    path: '',
    component: Link58Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link58PageRoutingModule {}
