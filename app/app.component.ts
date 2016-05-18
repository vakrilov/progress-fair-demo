import {Component} from "@angular/core";
import {Session, SessionsService} from "./session.service";

@Component({
    selector: "my-app",
    providers: [SessionsService],
    template: `
    <grid-layout rows="auto auto *">
        <image src="res://header"></image>
        
        <grid-layout row="1"  columns="auto *" rows="auto auto auto" class="container">
            <image rowSpan="3" [src]="first.isFav ? 'res://fav_1' : 'res://fav_0'"></image>
            
            <Label col="1" row="0" [text]="first.start" class="time"></Label>
            <Label col="1" row="1" [text]="first.title" class="title"></Label>
            <Label col="1" row="2" [text]="first.speaker" class="speaker"></Label>              
        </grid-layout>
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
