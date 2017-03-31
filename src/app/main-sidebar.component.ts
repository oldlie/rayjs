/**
 * Created by ray on 2017/3/30.
 */

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SideBarChildModel, SideBarItemModel} from "./models/sidebar-model";
import {MainSidebarData} from "./mock_data/main-sidebar-mock";
import {MainContentComponent} from "./main-content.component";
import {MainContentNavigateService} from "./services/content-navigate.service";
import {MainContentType} from "./models/main-content-types";
import {MainContentModel} from "./models/main-content.model";

@Component({
    selector: '.main-sidebar',
    templateUrl: './main-sidebar.component.html'
})
export class MainSidebarComponent implements OnInit{

    sideBarItems: Array<SideBarItemModel>;
    activeItem: Array<string>;

    @Output() navigate: EventEmitter<string> = new EventEmitter<string>();

    private  mainContent: MainContentComponent;
    mainNavService : MainContentNavigateService;

    constructor(mainNavService: MainContentNavigateService) {
        this.mainNavService = mainNavService;
    }

    ngOnInit(): void {
        this.activeItem = ["dashboard", "information"];
        this.sideBarItems = MainSidebarData;
    }

    navigation(child: SideBarChildModel) :void {
        this.activeItem = [child.pid, child.id];

        let content =  new MainContentModel();
        switch (child.contentType) {
            case MainContentType.userList:
                content.contentType = MainContentType.userList;
                content.breadCrumb = ['用户管理', '用户列表'];
                content.title = '用户列表';
                content.subTitle = '用户管理';
                content.icon = 'fa fa-users';
                break;
            case MainContentType.userFeedback:
                content.contentType = MainContentType.userFeedback;
                content.breadCrumb = ['用户管理', '用户反馈'];
                content.title = '用户反馈';
                content.subTitle = '用户管理';
                content.icon = 'fa fa-users';
                break;
            case MainContentType.userScore:
                content.contentType = MainContentType.userList;
                content.breadCrumb = ['用户管理', '积分兑换'];
                content.title = '积分兑换';
                content.subTitle = '用户管理';
                content.icon = 'fa fa-users';
                break;
            case MainContentType.dashboardInfo:
            default:
                content.contentType = MainContentType.dashboardInfo;
                content.breadCrumb = ['控制面板', '主要信息'];
                content.title = '主要信息';
                content.subTitle = '控制面板';
                content.icon = 'fa fa-dashboard';
                break;
        }

        this.mainNavService.mainContent =content;
    }
}