import {MainContentType} from "./main-content-types";
/**
 * Created by ray on 2017/3/31.
 */
export class MainContentModel {
    title: string;
    subTitle: string;
    breadCrumb: Array<string>;
    icon: string;
    contentType: MainContentType;

    constructor() {
        this.breadCrumb = new Array();
    }
}