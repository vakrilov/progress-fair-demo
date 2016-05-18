import {Component} from "@angular/core";
import {Session, SessionsService} from "./session.service";

@Component({
    selector: "my-app",
    providers: [SessionsService],
    template: `
    <grid-layout rows="auto auto *">
        <image src="res://header"></image>
        
        <label row="1" [text]="first.title"></label>
        
    </grid-layout>
`,
})
export class AppComponent {
    public sessions: Session[];
    public first: Session;

    constructor(service: SessionsService) {
        this.sessions = service.getSessions();
        this.first = this.sessions[0];
    }
}
