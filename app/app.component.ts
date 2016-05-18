import {Component, Input} from "@angular/core";
import {Session, SessionsService} from "./session.service";

@Component({
    selector: 'session',
    template: `
        <grid-layout row="1"  columns="auto *" rows="auto auto auto" class="container">
            <image rowSpan="3" [src]="session.isFav ? 'res://fav_1' : 'res://fav_0'"></image>
            
            <Label col="1" row="0" [text]="session.start" class="time"></Label>
            <Label col="1" row="1" [text]="session.title" class="title"></Label>
            <Label col="1" row="2" [text]="session.speaker" class="speaker"></Label>              
        </grid-layout>
  `
})
export class SessionComponent {
    @Input() session: Session;
}


@Component({
    selector: "my-app",
    providers: [SessionsService],
    directives: [SessionComponent],
    template: `
    <grid-layout rows="auto auto *">
        <image src="res://header"></image>
        
        <session [session]="first"></session>
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
