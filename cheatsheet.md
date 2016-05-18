
1. Explain `main.ts` with bootstrap and `app.component.ts`. Play with livesync
2. Remove all content and start a new - add a header:
    `<image src="res://header"></image>`
3. Show "session.service" and add it to the component
4. Create simple component:
Component:
```
@Component({
    selector: 'session',
    template: `<Label [text]="session.title"></Label>`
})
export class SessionComponent {
    @Input() session: Session;
}
```
ngFor:
```
<session *ngFor="let session of filteredSessions" [session]="session"></session>
``` 

5. Extend the component + CSS
CSS - uncomment
XML:
```
<grid-layout row="1"  columns="auto *" rows="auto auto auto" class="container">
    <image rowSpan="3" [src]="session.isFav ? 'res://fav_1' : 'res://fav_0'"></image>
    
    <Label col="1" row="0" [text]="session.start" class="time"></Label>
    <Label col="1" row="1" [text]="session.title" class="title"></Label>
    <Label col="1" row="2" [text]="session.speaker" class="speaker"></Label>              
</grid-layout>
```

6. Add pipe for the date:
    [text]="(session.start | date:'HHmm') + ' - ' + (session.end | date:'HHmm')"
    
7. Add event to toggle sessions - @Output

8. Add animations:
    [class.fav]="session.isFav"

9. Add filter
Template
```
<Switch row="1" [(ngModel)]="favOnly"></Switch>
```
Component:
```
public favOnly: boolean;
public get filteredSessions(): Session[] {
    return this.sessions.filter(s => !this.favOnly || s.isFav);
}
```
    
