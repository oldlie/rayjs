import { Core } from '../core';

class App {
    
    protected id: string;
    protected parentId: string;
    protected core = new Core();

    constructor(id: string, parentId: string) {
        this.id = id;
        this.parentId = parentId;
    }

    /**
     * getId
     */
    getId(): string {
        return this.parentId == null ? this.id : this.parentId + '_' + this.id;
    }
}

export { App }