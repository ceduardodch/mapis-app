import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink17Page } from './otrolink17.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink17PageRoutingModule {}
