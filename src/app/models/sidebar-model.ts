import {MainContentType} from "./main-content-types";
/**
 * Created by ray on 2017/3/30.
 */

export class SideBarChildModel {
    id: string;
    pid: string;
    text: string;
    contentType: MainContentType;
}

export class SmallLabelModel {
    id: string;
    pid: string;
    color: string;
    text: string;
}

export class SideBarItemModel {
    id: string;
    icon: string;
    text: string;
    labels: Array<SmallLabelModel>;
    children: Array<SideBarChildModel>;

    constructor() {
        this.children = new Array();
    }

    addChild(child: SideBarChildModel): SideBarItemModel {
        child.pid = this.id;
        this.children.push(child);
        return this;
    }
}