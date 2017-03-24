import { CTL, CTLHtml, CTLStyle } from './ctl';

export function ButtonCTLEvent() {

}

export class ButtonCTL extends CTL implements CTLHtml {

    constructor(id: string, pid: string) {
        super(id, pid);
    }

    private readonly template = `<button id="@id@" type="@type@" class="btn @style@">@icon@ @text@</button>`;
    private type = 'button';
    private style = 'btn-default';
    private icon: string | null = null;
    private text: string | null = null;
    
    setType(type: string): ButtonCTL {
        this.type = type;
        return this;
    }

    setStyle(style: string): ButtonCTL {
        this.style = style;
        return this;
    }

    setIcon(icon: string): ButtonCTL {
        this.icon = icon;
        return this;
    }

    setText(text: string): ButtonCTL {
        this.text = text;
        return this;
    }

    getHtml(): string{
        return this.core.htmlTemplate(this.template, [
            {key: "id", value: this.getId()},
            {key: "type", value: this.type},
            {key: "style", value: this.style},
            {key: "icon", value: this.icon == null ? '' : this.icon},
            {key: "text", value: this.text == null ? '' : this.text}
        ]);
    }
}