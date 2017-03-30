import '../../public/css/styles.css';
import '../../public/css/skins/_all-skins.css';
import '../../public/js/app.js';

import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header.component'
import { MainSidebarComponent } from './main-sidebar.component';
import { MainFooterComponent } from './main-footer.component';
import { MainContentComponent } from './main-content.component';
import {WebVersionModel} from "./models/WebVersionModel";


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
      AppComponent,
      MainHeaderComponent,
      MainSidebarComponent,
      MainFooterComponent,
      MainContentComponent,

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
