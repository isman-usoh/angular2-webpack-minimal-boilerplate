import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgModule }       from "@angular/core";
import { BrowserModule  } from "@angular/platform-browser";
import { enableProdMode } from "@angular/core";
import { AppComponent }   from "./app";

import {CounterComponent} from "./components/counter/counter.component";

@NgModule({
    declarations: [AppComponent, CounterComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent],
})
class AppModule { }

if (process.env.ENV === "production") {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);