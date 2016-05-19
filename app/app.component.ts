import {Component, Input} from "@angular/core";
import {Session, SessionsService} from "./session.service";
import {SessionComponent} from "./session.component";

@Component({
    selector: "my-app",
    providers: [SessionsService],
    directives: [SessionComponent],
    template: `
    <grid-layout rows="auto auto *">
        <image src="res://header"></image>
        
        <Label row="1" class="toggle" text="SHOW ONLY FAVOURITES"></Label>
        <Switch row="1" [(ngModel)]="favOnly"></Switch>
        
        
        <scroll-view row="2">
            <stack-layout>
                <session *ngFor="let mySession of filteredSessions"
                 [session]="mySession" (select)="toggleSession(mySession)"></session>
            </stack-layout>
        </scroll-view>
        
    </grid-layout>
`,
})
export class AppComponent {
    public sessions: Session[];
    public favOnly: boolean;

    public get filteredSessions(): Session[] {
        return this.sessions.filter(s => !this.favOnly || s.isFav);
    }

    constructor(service: SessionsService) {
        this.sessions = service.getSessions();
    }

    public toggleSession(session: Session) {
        session.isFav = !session.isFav;
    }
}
