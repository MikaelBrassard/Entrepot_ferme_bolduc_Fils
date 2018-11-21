import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { FirebaseRequestProvider } from '../../providers/firebase-request/firebase-request'; 
import { ToastProvider } from '../../providers/toast/toast';

@IonicPage()
@Component({
  selector: 'page-fans',
  templateUrl: 'fans.html',
})
export class FansPage {

  Fans: Observable<any[]>;
  selectionSection: string;
  selectionEntrepot: string;

  constructor(private navCtrl: NavController,private firebaseRequest : FirebaseRequestProvider, private toast: ToastProvider) {
    this.Fans = firebaseRequest.get('Fans');
    this.selectionSection = '';
    this.selectionEntrepot = '';
  }

  descriptionClicked(Index:number): Promise<any>{
    return this.navCtrl.push('DescriptionPage', { 'PrevPage' : 'FansPage','PageItem': 'Fans','idexParam': Index });
  }

  onClickItemList(description:JSON, index:Number){
      this.toast.show('Fan ' + index +' : ' + description);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FansPage');
  }

}
