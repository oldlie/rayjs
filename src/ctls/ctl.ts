import { Core } from '../core';

export enum CTLStyle {
    horizontal, // 水平
    vertical, // 垂直
    bigger,
    normal,
    smaller,
    primary
}

export interface CTLHtml {
    getHtml(tempSelector: CTLStyle | null): string;
}

export class CTL {

    protected id: string;
    protected pid: string;
    protected core = new Core();

    constructor(id: string, pid: string) {
        this.id = id;
        this.pid = pid;
    }

    getId(): string {
        return this.pid == null ? this.id : this.pid + '_' + this.id;
    }
}

export interface CTLHandle {
    $bind(): void;
}