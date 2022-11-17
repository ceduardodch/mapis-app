import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { OverlayEventDetail } from '@ionic/core/components';
import { MenuController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-my-search',
  templateUrl: './my-search.page.html',
  styleUrls: ['./my-search.page.scss'],
})
export class MySearchPage implements OnInit {
  data: any;
  junk: any;
  pages :any = [];
  filterTerm: string;

  constructor(private http: HttpClient,public modalCtrl: ModalController) { }
  

  ngOnInit() {
    this.getUrls().subscribe(res => 
      {console.log(res);
      this.pages = res;
            }      );
  }

  closeModal() {
    this.modalCtrl.dismiss();
}

  getUrls(){
    return this.http
    .get('assets/my-search.json')
    .pipe(
      map((res:any)=>{
        return res.data;

      })
    )
  }

}
