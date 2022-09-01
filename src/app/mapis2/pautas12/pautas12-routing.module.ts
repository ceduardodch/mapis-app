import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas12Page } from './pautas12.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas12PageRoutingModule {}
