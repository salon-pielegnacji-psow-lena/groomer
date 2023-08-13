export class TableRow {
    public colspan: number = 1;
    public data: any;
    public border: boolean = false;
    public small: boolean = false;
    constructor(colspan: number, data: any, border: boolean, small: boolean) {
        this.colspan = colspan;
        this.data = data;
        this.border = border;
        this.small = small;
    }
}
