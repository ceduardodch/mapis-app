import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MySearchPageRoutingModule } from './my-search-routing.module';

import { MySearchPage } from './my-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MySearchPageRoutingModule
  ],
  declarations: [MySearchPage]
})
export class MySearchPageModule {



}
