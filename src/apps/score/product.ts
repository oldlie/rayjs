import { App } from '../app';

import { CTLStyle } from '../../ctls/ctl';
import * as form from '../../ctls/form';
import { BoxCTL } from '../../ctls/box';

export class ScoreProductApp extends App {

    constructor(id: string, parentId: string) {
        super(id, parentId);
    }
    run(): void {
        console.log('run');

        let addForm = new form.FormHorizontalCTL('add', this.getId());
        let pid = addForm.getId();

        let idCtl = new form.FormHideRowCTL('id', pid);
        idCtl.setVal('1');

        let nameCtl = new form.FormInputRowCTL('name', pid);
        nameCtl.setText('名称:').setType('text');

        let priceCtl = new form.FormInputRowCTL('price', pid);
        priceCtl.setText('需要的积分:').setType('number');
        
        let inventory = new form.FormInputRowCTL('inventory', pid);
        

        addForm
            .regControl(idCtl)
            .regControl(nameCtl)
            .regControl(priceCtl);

        let mainBox = new BoxCTL('box', null);
        mainBox
            .setTitle('添加积分兑换产品')
            .setBodyHtml(addForm.getHtml(CTLStyle.horizontal))
            .render(CTLStyle.primary);
    }
}