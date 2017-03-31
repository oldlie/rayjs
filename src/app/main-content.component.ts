/**
 * Created by ray on 2017/3/30.
 */
import { Component, OnInit, Input } from '@angular/core';
import {MainContentHeader} from "./models/main-content-header";
import {MainContentType} from "./models/main-content-types";
import {MainContentModel} from "./models/main-content.model";

@Component({
    selector: '.main-content',
    templateUrl: './main-content.component.html',
})
export class MainContentComponent implements OnInit{


    @Input()
    content: MainContentModel;

    constructor() {

    }

    ngOnInit(): void {

    }
}