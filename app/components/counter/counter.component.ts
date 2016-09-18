import {Component} from "@angular/core";

@Component({
    selector: "im-counter",
    templateUrl: "./counter.component.html"
})
export class CounterComponent {
    private counter: number = 0;
    constructor() {

    }
    onCounterUp() {
        this.counter++;
    }
    onCounterDown() {
        this.counter--;
    }
}