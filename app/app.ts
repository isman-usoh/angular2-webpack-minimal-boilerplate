import {Component} from "@angular/core";
import { bootstrap } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";


@Component({
    selector: "my-app",
    templateUrl: "./app.html",
    styleUrls: ["./theme/app.css"]
})
class AppComponent {
    constructor() {
    }
}

if (process.env.ENV === "production") {
    enableProdMode();
}

bootstrap(AppComponent, []);