import "@ionic/core";
import { defineCustomElements } from '@ionic/pwa-elements/loader';

export class AppComponent {
    constructor() {
      defineCustomElements(window);
    }
  }