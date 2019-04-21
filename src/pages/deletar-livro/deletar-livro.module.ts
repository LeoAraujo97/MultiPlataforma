import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeletarLivroPage } from './deletar-livro';

@NgModule({
  declarations: [
    DeletarLivroPage,
  ],
  imports: [
    IonicPageModule.forChild(DeletarLivroPage),
  ],
})
export class DeletarLivroPageModule {}
