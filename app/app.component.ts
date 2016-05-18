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
        
        <scroll-view row="2">
            <stack-layout>
                <session *ngFor="let session of sessions" [session]="session" (select)="toggleSession(session)"></session>
            </stack-layout>
        </scroll-view>
        
    </grid-layout>
`,
})
export class AppComponent {
    public sessions: Session[];

    constructor(service: SessionsService) {
        this.sessions = service.getSessions();
    }

    public toggleSession(session: Session) {
        session.isFav = !session.isFav;
    }
}
