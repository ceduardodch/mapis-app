import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MySearchPage } from 'src/app/my-search/my-search.page';

@Component({
  selector: 'app-normativas14c',
  templateUrl: './normativas14c.page.html',
  styleUrls: ['./normativas14c.page.scss'],
})
export class Normativas14cPage implements OnInit {

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
