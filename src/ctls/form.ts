import { CTL, CTLHtml, CTLStyle } from './ctl';

export class FormHorizontalCTL extends CTL {

    constructor(id: string, pid: string) {
        super(id, pid);
    }

    private readonly template = `<div class="form-horizontal" id="@id@"> @rows@ </div>'`;
    private ctls = new Array<CTLHtml>(); 

    regControl(ctl: CTLHtml): FormHorizontalCTL {
        this.ctls.push(ctl);
        return this;
    }

    private getControlsHtml(style: CTLStyle): string {
        let html = [];
        for(let ctl of this.ctls) {
            html.push(ctl.getHtml(style));
        }
        return html.join('');
    }

    getHtml(style: CTLStyle): string {
        return this.core.htmlTemplate(this.template, [
            {key: "id", value: this.getId()},
            {key: "rows", value: this.getControlsHtml(style)}
        ])
    }
}

export class FormHideRowCTL extends CTL implements CTLHtml {

    constructor(id: string, pid: string) {
        super(id, pid);
    }

    private readonly template = `<input type="hidden" id="@id@" value="@val@" >`;
    private val: string;

    setVal(val: string): FormHideRowCTL {
        this.val = val;
        return this;
    }

    getHtml(): string {
        return this.core.htmlTemplate(this.template, [
            {key: "id", value: this.getId()},
            {key: "val", value: this.val}
        ])
    }
}

export class FormInputRowCTL extends CTL implements CTLHtml {
    
    constructor(id: string, pid: string) {
        super(id, pid);
    }

    private readonly template = 
    `<div class="form-group">
        <label class="col-sm-3" for="@id@">@text@：</label>
        <div class="col-sm-9">
            <input type="@type@" class="form-control" id="@id@" placeholder="@text@" @attr@>
        </div>
    </div>`;

    private readonly templateVertical = '// TODO';

    private text: string;
    private type: string;
    private attr: string;

    setText(text: string): FormInputRowCTL {
        this.text = text;
        return this;
    }

    setType(type: string): FormInputRowCTL {
        this.type = type;
        return this;
    }

    setAttr(attr: string): FormInputRowCTL {
        this.attr = attr;
        return this;
    }

    getHtml(selector: CTLStyle | null): string {
        let temp = this.template;
        if (selector == CTLStyle.vertical) {
            // TODO: 需要用这个风格时再实现
            return this.templateVertical;
        }
        return this.core.htmlTemplate(temp, [
            {key: "id", value: this.getId()},
            {key: "text", value: this.text},
            {key: "type", value: this.type},
            {key: "attr", value: this.attr ? this.attr : ''}
        ])
    }
}