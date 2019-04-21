import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SelectSearchableComponent} from 'ionic-select-searchable'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    @ViewChild('myselect') selectComponet : SelectSearchableComponent;
    
  constructor(public navCtrl: NavController) {

  }

}
