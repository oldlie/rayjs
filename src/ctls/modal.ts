import { CTL, CTLHtml, CTLStyle } from './ctl';
import { ButtonCTL } from './button';

export class ModalCTL extends CTL implements CTLHtml {

    constructor(id: string, pid: string) {
        super(id, pid);
    }

    private template = `<div class="modal fade @style@" id="@id@" >
    <div class="modal-dialog" role="document">
       <div class="modal-content">
           <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">@title@</h4>
            </div>
            <div class="modal-body">
                <div class="row" style="padding: 5px 0;"><div class="col-sm-12" id="@tip@"></div></div>
                @body@
            </div>
            <div class="modal-footer">
                @buttons@<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            </div>
        </div>
    </div>
</div>`;

    private style: string | null = null;
    private title: string = '标题';
    private tip: string = '';
    private body: string = '加载中。。。';
    private buttons: Array<ButtonCTL> = new Array();

    private getButtonsHtml(): string{
        var buttonsHtml: Array<String> = new Array();
        for (let button of this.buttons) {
            buttonsHtml.push(button.getHtml());
        }
        return buttonsHtml.join('');
    }
    getHtml(): string {
        return this.core.htmlTemplate(this.template, [
            {key: "style", value: this.style == null ? '' : this.style },
            {key: "id", value: this.getId()},
            {key: "tip", value: this.tip},
            {key: "body", value: this.body},
            {key: 'buttons', value: this.getButtonsHtml()}
        ]);
    }

    show(): ModalCTL {
        this.core.$id(this.getId()).modal('show');
        return this;
    }

    hide(): ModalCTL {
        this.core.$id(this.getId()).modal('hide');
        return this;
    }

    setSytle(style: string): ModalCTL {
        this.style = style;
        return this;
    }
    setTitle(title: string): ModalCTL {
        this.title = title;
        return this;
    }
    setTip(tip: string): ModalCTL {
        this.tip = tip;
        return this;
    }
    setBody(html: string): ModalCTL {
        this.body = html;
        return this;
    }
    setButton(button: ButtonCTL) {
        this.buttons.push(button);
        return this;
    }
}