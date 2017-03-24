import { CTL, CTLStyle, CTLHtml } from './ctl';
import { ButtonCTL } from './button';

export class BoxCTL extends CTL implements CTLHtml {

    constructor(id: string, pid: string) {
        super(id, pid);
    }

    private title: string;
    private bodyHtml: string;
    private buttons: Array<ButtonCTL> = [];

    private readonly template =
    `<div class="box box-primary" id="@id@">
    <div class="box-header with-border"><h3 class="box-title">@title@</h3></div>
    <div class="box-body">@body@</div>
    <div class="box-footer">@buttons@</div>
</div>`;

    private getButtonsHtml(): string{
        let buttonsHtml = new Array<string>();
        return buttonsHtml.join('');
    }

    getHtml(style: CTLStyle | null): string {
        return this.core.htmlTemplate(this.template, [
            { key: "id", value: this.getId() },
            { key: "title", value: this.title },
            { key: "body", value: this.bodyHtml},
            { key: 'buttons', value: this.getButtonsHtml()}
        ]);
    }

    render(style?: CTLStyle): BoxCTL {
        this.core.$id(this.getId()).replaceWith(this.getHtml(style));
        return this;
    }

    setTitle(title: string): BoxCTL {
        this.title = title;
        return this;
    }

    setBodyHtml(html: string): BoxCTL {
        this.bodyHtml = html;
        return this;
    }

    setButton(button: ButtonCTL): BoxCTL {
        this.buttons.push(button);
        return this;
    }
}