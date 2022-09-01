import { Component, Element, h } from '@stencil/core';
import { Camera, CameraResultType, CameraSource} from '@capacitor/camera';
import Axios from 'axios';
@Component({
  tag: 'app-modal',
  styleUrl: 'app-modal.css',
  shadow: true,
})
export class AppModal {
  @Element() el: HTMLElement;
  private url = "https://webhook.site/4bbf8b89-853d-4df4-b809-076ba2b77708";
  async closeModal() {
    await (this.el.closest('ion-modal') as 
           HTMLIonModalElement).dismiss();
  }
  uploadImage(image){
    Axios.post(this.url,
      image, {
        headers: {
          'Access-Control-Allow-Origin' : '*'
        }
       })
    .then(res =>{
      if(res.status === 200 ){
        alert("Submitted Succesfully");
      }
    })
  }
  private handleTakePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64
    });
  await this.uploadImage(image);
  };
  private handleChoosePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      source: CameraSource.Photos,
      resultType: CameraResultType.Base64
    });
    await this.uploadImage(image);
  };
  render() {
    return [
      <ion-header>
        <ion-toolbar color="secondary">
          <ion-buttons slot="start">
            <ion-button onClick={() => this.closeModal()}>
              <ion-icon name="close"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,
      <ion-button onClick={() => { this.handleTakePhoto(); this.closeModal()}} >Take Photo</ion-button>,
      <ion-button onClick={() => { this.handleChoosePhoto(); this.closeModal()}}>Choose Photo</ion-button>
    ];
  }

}
