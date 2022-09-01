import { Component, h } from '@stencil/core';
import {modalController} from '@ionic/core';

@Component({
  tag: 'pages-tour',
  styleUrl: 'pages-tour.css',
  shadow: true,
})
export class PagesTour {

  private async openModal() {
    const modal: HTMLIonModalElement =
                 await modalController.create({
      component: 'app-modal'
    });
    await modal.present();
  }
  
  render() {
    return [
      <ion-header>
        <ion-toolbar color="danger">
          <ion-title class="text-align-center bold-text">Tour</ion-title>
        </ion-toolbar>
      </ion-header>,
      <div class="image-upload"> 
      <div class="image-upload__edit" onClick={() => this.openModal()}>
        <label htmlFor="file"></label>
      </div>
      <div class="image-upload__preview">
        <div id="image-preview"></div>
      </div>
    </div>
    ,
    <div>
        <ion-title class='lg-text bold-text'>Tour De Tour</ion-title>
        <div class='text-align-center'>
        <ion-icon name="flash-outline"></ion-icon> Aug 19 - Aug 30  22
        </div>
      </div>,
      <div class="pt-5">
        <ion-title class="text-align-center">Tour De Tour</ion-title>
          <p class='text-align-center'>No gollers in this tournament yet</p>
      </div>,
      <div>
        <p class='tournament-div bold-text'>TOURNAMENT  1</p>
      </div>,
    ];
  }
}