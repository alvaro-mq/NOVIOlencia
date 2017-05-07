import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chat } from '../chat/chat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  irChat(){
    this.navCtrl.push(Chat);
  }

}
