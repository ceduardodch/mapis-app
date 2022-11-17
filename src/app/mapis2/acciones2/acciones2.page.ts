import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { MySearchPage } from 'src/app/my-search/my-search.page';


@Component({
  selector: 'app-acciones2',
  templateUrl: './acciones2.page.html',
  styleUrls: ['./acciones2.page.scss'],
})
export class Acciones2Page implements OnInit {
  loading: HTMLIonLoadingElement;

  constructor(private modalCtrl: ModalController) {}

  async openModal(){
    const modal = await this.modalCtrl.create({
    component: MySearchPage,
    cssClass: 'small-modal',
    componentProps: { value: 123 }
    
    });
  
    await modal.present();
  
  }
  ngOnInit() {
  }
}
