import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Livro } from '../../Model/Livro';
import { AtualizarLivroPage } from '../atualizar-livro/atualizar-livro';
import { AdicionarLivroPage } from '../adicionar-livro/adicionar-livro';
/**
 * Generated class for the LivrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-livros',
  templateUrl: 'livros.html',
})
export class LivrosPage {

  public livro : Livro;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    this.livro = this.navParams.get("livro");
  }
  deletarLivro() 
  {
    const alert = this.alertCtrl.create({
      title: 'Deletado!',
      subTitle: 'Livro deletado com Sucesso',
      buttons: ['OK']
    });
    alert.present();
  }

  AdicionarLivro()
  {
    this.navCtrl.push(AdicionarLivroPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LivrosPage');
  }

  alterarLivro(livro:Livro){
    
  }

  atualizarlivro(){
    this.navCtrl.push(AtualizarLivroPage);
  }
}
