import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { MySearchPage } from 'src/app/my-search/my-search.page';
@Component({
  selector: 'app-link19',
  templateUrl: './link19.page.html',
  styleUrls: ['./link19.page.scss'],
})
export class Link19Page implements OnInit {

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
