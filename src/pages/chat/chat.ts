import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Chat page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class Chat {
  messages1:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

     this.messages1 = [{
        text: 'Jilata Homero qawqha anunitasa?',
        translate: 'Hermano Homero cuantos perros tienes?',
        name: 'NED',
        avatar: '../../assets/img/flanders.jpg',
        imagen: ''
      },
      {
        text: 'Nayaxa mä anunithwa',
        translate: 'Yo tengo un perro',
        name: 'HOMERO',
        avatar: '../../assets/img/homero.png',
        imagen: '../../assets/img/18_1.png'
      },
      {
        text: 'Ukata qawqha wawanitasa?',
        translate: 'Y cuantos hij@s tienes?',
        name: 'NED',
        avatar: '../../assets/img/flanders.jpg',
        imagen: ''
      },
      {
        text: 'Nayaxa Kimsa wawanithwa',
        translate: 'Yo tengo tres hij@s',
        name: 'HOMERO',
        avatar: '../../assets/img/homero.png',
        imagen: '../../assets/img/18_2.png'
      },
      {
        text: 'Jichha qawqha masinitasa?',
        translate: 'Ahora cuantos amigos tienes?',
        name: 'NED',
        avatar: '../../assets/img/flanders.jpg',
        imagen: ''
      },
      {
        text: 'Nayaxa pusi masinithwa',
        translate: 'Yo tengo cuatro amigos',
        name: 'HOMERO',
        avatar: '../../assets/img/homero.png',
        imagen: '../../assets/img/18_3.png'
      },
      {
        text: 'Warmimaja qawqha kullakanisa?',
        translate: 'Tu esposa cuantas hermanas tiene?',
        name: 'NED',
        avatar: '../../assets/img/flanders.jpg',
        imagen: ''
      },
      {
        text: 'Warmijaxa pä kullakaniwa',
        translate: 'Mi esposa tiene dos hermanas',
        name: 'HOMERO',
        avatar: '../../assets/img/homero.png',
        imagen: '../../assets/img/18_4.png'
      },
      {
        text: 'Qhatu aljiri, qawqha wawanisa?',
        translate: 'El vendedor del mercado cuantos hij@s tiene?',
        name: 'NED',
        avatar: '../../assets/img/flanders.jpg',
        imagen: ''
      },
      {
        text: 'Qhatu aljiri, kimsaqallqu wawaniwa.',
        translate: 'El vendedor del mercado tiene ocho hij@s',
        name: 'HOMERO',
        avatar: '../../assets/img/homero.png',
        imagen: '../../assets/img/18_5.png'
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chat');
  }

}
