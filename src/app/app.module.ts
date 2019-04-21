import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LivrosPageModule } from '../pages/livros/livros.module';
import { LivrosPage } from '../pages/livros/livros';
import { AdicionarLivroPage } from '../pages/adicionar-livro/adicionar-livro';
import { AtualizarLivroPage } from '../pages/atualizar-livro/atualizar-livro';
import { DeletarLivroPage } from '../pages/deletar-livro/deletar-livro';
import { AdicionarLivroPageModule } from '../pages/adicionar-livro/adicionar-livro.module';
import { AtualizarLivroPageModule } from '../pages/atualizar-livro/atualizar-livro.module';
import { DeletarLivroPageModule } from '../pages/deletar-livro/deletar-livro.module';
import { SelectSearchableModule} from 'ionic-select-searchable';
import{ HttpModule} from "@angular/http";
import { LivroProvider } from '../providers/livro/livro';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LivrosPageModule,
    AdicionarLivroPageModule,
    AtualizarLivroPageModule,
    DeletarLivroPageModule,
    SelectSearchableModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LivrosPage,
    AdicionarLivroPage,
    AtualizarLivroPage,
    DeletarLivroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LivroProvider
  ]
})
export class AppModule {}
