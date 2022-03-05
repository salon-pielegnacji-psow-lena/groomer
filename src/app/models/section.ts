import { ElementRef } from "@angular/core";

export class Section {
    public name: string;
    public oldUrl: string | null;
    public element: ElementRef;
    public startingPoint: number;
    public link: any;
    public description: string;
    constructor(name: string, description: string, elementRef: ElementRef, oldUrl: string | null) {
        this.name = name;
        this.oldUrl = oldUrl;
        this.element = elementRef;
        this.startingPoint = elementRef.nativeElement.offsetTop + elementRef.nativeElement.offsetHeight - 3;
        this.link = `/${name}`;
        this.description = description;
    }
}
