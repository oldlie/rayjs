/**
 * Created by ray on 2017/3/30.
 */

import {Component, OnInit} from '@angular/core';
import {SideBarChildModel, SideBarItemModel} from "./models/sidebar-model";
import {MainSidebarData} from "./mock_data/main-sidebar-mock";


@Component({
    selector: '.main-sidebar',
    templateUrl: './main-sidebar.component.html'
})
export class MainSidebarComponent implements OnInit{

    sideBarItems: Array<SideBarItemModel>;
    activeItem: Array<string>;

    constructor() {

    }

    ngOnInit(): void {
        this.activeItem = ["user", "feedback"];
        this.sideBarItems = MainSidebarData;
    }

    navigation(child: SideBarChildModel) :void {
        this.activeItem = [child.pid, child.id];
        console.log(child.text);
    }
}