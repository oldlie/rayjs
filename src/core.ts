export class KeyValue {
    public key:string;
    public value:any;

    constructor(key:string, value:any) {
        this.key = key;
        this.value = value;
    }
}

export class Core {
    
    private webRoot: string;    
    setWebRoot(webRoot: string): Core {
        console.log("set webRoot:" + webRoot);
        this.webRoot = webRoot;
        return this;
    }
    getWebRoot(): string {
        console.log("get webRoot:" + this.webRoot);
        return this.webRoot;
    }
    $id(id: string):JQuery {
        return $('#' + id);
    }
    $class(cla: string):JQuery {
        return $('.' + cla);
    }
    htmlTemplate(template:string, kvs:KeyValue[]):string {
        for (let i = 0; i < kvs.length; i++) {
            let kv = kvs[i];
            template = template.replace(new RegExp('@' + kv.key + '@', "g"), kv.value);
        }
        return template;
    }
}
