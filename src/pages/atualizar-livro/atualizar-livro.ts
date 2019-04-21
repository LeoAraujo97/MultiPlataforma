import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AtualizarLivroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-atualizar-livro',
  templateUrl: 'atualizar-livro.html',
})
export class AtualizarLivroPage {
 item: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    this.item =navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AtualizarLivroPage');
  }

  showAlertUpdate() 
  {
    const alert = this.alertCtrl.create({
      title: 'Atualizado!',
      subTitle: 'Livro Atualizado com Sucesso',
      buttons: ['OK']
    });
    alert.present();
  }
}
