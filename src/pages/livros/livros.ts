import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Livro } from '../../Model/Livro';
import { AtualizarLivroPage } from '../atualizar-livro/atualizar-livro';
import { AdicionarLivroPage } from '../adicionar-livro/adicionar-livro';
import { LivroProvider } from '../../providers/livro/livro';
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
  public lista_livros = new Array<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,private livroProvider: LivroProvider) {
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
    this.livroProvider.buscaLivros().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);

        for (var val in objeto_retorno){
          console.log(val);
          this.lista_livros.push(objeto_retorno[val]);
        }
      }, error => {
        console.log(error)
      }
    )
    console.log('ionViewDidLoad LivrosPage');
  }

}
