/**
 * Created by ray on 2017/3/30.
 */
import { OnInit,Component } from '@angular/core';
import {WebVersionModel} from "./models/web-version-model";

@Component({
    selector: 'footer',
    templateUrl: './main-footer.component.html'
})
export class MainFooterComponent implements OnInit{

    webVersion: WebVersionModel;

    constructor() {

    }

    ngOnInit(): void {
        this.webVersion = new WebVersionModel();
        this.webVersion.version = "0.1.0";
        this.webVersion.dateRange = "2017";
        this.webVersion.url = "https://github.com/oldlie/rayjs";
        this.webVersion.author = "OLDLIE";
    }
}