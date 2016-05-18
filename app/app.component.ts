import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    template: `
    <grid-layout rows="auto auto *">
        <image src="res://header"></image>
    </grid-layout>
`,
})
export class AppComponent {

}
