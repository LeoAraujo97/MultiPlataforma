import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AdicionarLivroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adicionar-livro',
  templateUrl: 'adicionar-livro.html',
})
export class AdicionarLivroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Livro Adicionado!',
      subTitle: 'A inclusão o livro foi realizada!',
      buttons: ['OK']
    });
    alert.present();
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarLivroPage');
  }

}
