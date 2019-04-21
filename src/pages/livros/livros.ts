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

  public livros : Livro [];
    
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
   
    var livro1 = {titulo:'O Tatuador De Auschwitz', subtitulo:'Os Horrores Dos Campos De Concentração',capa:'Brochura',editora:'Planta do Brasil',autor:'Morris, Heather',isbn:'9788542215694',publicacao:'2019',paginas:'240',imagem:'../../assets/imgs/images.livrariasaraiva.com.br.jpg'};
    var livro2 = {titulo:'O Milagre Da Manhã', subtitulo:'',capa:'Brochura',editora:'Best Seller',autor:'Elrod,Hal',isbn:'',publicacao:'2019',paginas:'196',imagem:'../../assets/imgs/milagredamanha.jpg'};
    var livro3 = {titulo:'Furacão Anitta', subtitulo:'',capa:'Brochura',editora:'Agir',autor:'Dias,Leo',isbn:'',publicacao:'2019',paginas:'160',imagem:'../../assets/imgs/anitta.jpg'};
    this.livros = [livro1,livro2,livro3];

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

  adicionarLivro()
  {
    this.navCtrl.push(AdicionarLivroPage);
  }
  atualizarlivro(livros:Livro){
    this.navCtrl.push(AtualizarLivroPage,livros);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LivrosPage');
  }
}
