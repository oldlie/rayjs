/**
 * Created by ray on 2017/3/31.
 */
export class MainContentHeader {

    title: string;
    subTitle: string;
    breadCrumb: Array<string>;
    icon: string;

    constructor() {
        this.breadCrumb = new Array();
    }
}