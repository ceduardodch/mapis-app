import { AfterContentChecked, Component, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  @ViewChild('swiper') swiper:SwiperComponent;


  config: SwiperOptions={
    slidesPerView: 2,
  };
  constructor() {}


}
