import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Header {
    public showSlideDownAnimation: boolean = false;
    public showSlideUpAnimation: boolean = false;
    getClasses() {
        let classes = "";
        if (this.showSlideDownAnimation) {
            classes += "header slide-down";
        }
        else if (this.showSlideUpAnimation) {
            classes += "header slide-up";
        }
        return classes;
    }
    isShown() {
        return this.showSlideDownAnimation || this.showSlideUpAnimation;
    }
}
