import { Component,OnInit } from '@angular/core';
import {MainContentType} from "./models/main-content-types";
import {MainContentNavigateService} from "./services/content-navigate.service";
import {MainContentModel} from "./models/main-content.model";

@Component({
  selector: 'my-app',
  template: `<header class="main-header"></header>
<div class="main-sidebar" ></div>
<div class="content-wrapper main-content" [content]="navService.mainContent" >
    
</div>
<footer class="main-footer"></footer>
`,
})
export class AppComponent implements OnInit{

  content: MainContentModel;
  navService: MainContentNavigateService;

  constructor(navigateService: MainContentNavigateService) {
    this.navService = navigateService;
  }

  ngOnInit(): void {
    this.content = new MainContentModel();
    this.content.contentType = MainContentType.dashboardInfo;
    this.content.breadCrumb = ['控制面板', '主要信息'];
    this.content.title = '控制面板';
    this.content.subTitle = '主要信息';
    this.content.icon = 'fa fa-dashboard';
    this.navService.mainContent = this.content;
  }

}
