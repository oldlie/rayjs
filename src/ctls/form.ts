import { CTL, CTLHtml, CTLStyle, CTLHandle } from './ctl';

export class FormHorizontalCTL extends CTL {

    constructor(id: string, pid: string) {
        super(id, pid);
    }

    private readonly template = `<div class="form-horizontal" id="@id@"> @rows@ </div>`;
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

export class FormModelRowCTL extends CTL implements CTLHtml {

    constructor(id: string, pid: string) {
        super(id, pid);
    }

    private readonly horizontalTemplate = `<div class="form-group">
    <label class="col-sm-3" for="@id@">@text@：</label>
    <div class="col-sm-9">
        <input id="@id@" type="text" readonly class="form-control">
        <button class="btn @style@" type="button">@btnIcon@ @btnText@</button>
    </div>
</div>`;

    private text: string;
    private style: string;
    private btnIcon: string | null;
    private btnText: string;
    private handle: CTLHandle;
    
    getHtml(style: CTLStyle): string{
        let temp = this.horizontalTemplate;
        return this.core.htmlTemplate(temp, [
            {key: "id", value: this.getId()},
            {key: "text", value: this.text},
            {key: "style", value: this.style},
            {key: "btnIcon", value: this.btnIcon == null ? '' : this.btnIcon},
            {key: "btnText", value: this.btnText == null ? '' : this.btnText}
        ]);
    }

    bindEvent(): void {
        if (this.handle) {
            this.core.$id(this.getId()).on('click', this.handle.$bind);
            console.log("bindEvent");
        } else{
            throw "没有可绑定的事件";
        }
    }
    
    setText(text: string): FormModelRowCTL{
        this.text = text;
        return this;
    }
    setStyle(style: string): FormModelRowCTL {
        this.style = style;
        return this;
    }
    setBtnIcon(icon: string): FormModelRowCTL {
        this.btnIcon = icon;
        return this;
    }
    setBtnText(text: string): FormModelRowCTL {
        this.btnText = text;
        return this;
    }
    setCTLHandler(handle: CTLHandle): FormModelRowCTL {
        this.handle = handle;
        return this;
    }
}