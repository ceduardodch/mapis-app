import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MySearchPage } from 'src/app/my-search/my-search.page';

@Component({
  selector: 'app-pautas7b',
  templateUrl: './pautas7b.page.html',
  styleUrls: ['./pautas7b.page.scss'],
})
export class Pautas7bPage implements OnInit {

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
