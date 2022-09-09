import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink15Page } from './otrolink15.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink15PageRoutingModule {}
