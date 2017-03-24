import $ from 'jquery';
import { Core } from './core';

import { ScoreProductApp } from './apps/score/product';

let app = new ScoreProductApp('box', null);
console.log(app.getId());
app.run();