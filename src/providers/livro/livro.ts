import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the LivroProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LivroProvider {
private baseApiPath = 'https://openlibrary.org/api/';

  constructor(public http: Http) {
    console.log('Hello LivroProvider Provider');
  }

  buscaLivros(){
     return this.http.get(this.baseApiPath +'books?bibkeys=ISBN:9780007322602,ISBN:9780439064973,ISBN:9780345320193,ISBN:9780261103597&format=json&details=true')
  }

}
