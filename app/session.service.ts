import {Injectable} from "@angular/core";

export interface Session {
    title: string;
    speaker: string;
    id: number;
    start: Date;
    end: Date;
    isFav: boolean;
}


var _sessions: Session[] = [
    { id: 0, title: "The Future of Technology at Progress", speaker: "Faris Sweis, Mike Benedict, Rob Steward", start: new Date(2016, 5, 16, 10, 0), end: new Date(2016, 5, 16, 10, 45), isFav: false },
    { id: 1, title: "Brand and Culture in Action", speaker: "Melissa Puls, Jerry Rulli", start: new Date(2016, 5, 16, 10, 50), end: new Date(2016, 5, 16, 11, 35), isFav: true },
    { id: 2, title: "Let Test Studio Turn You Into a Testing Hero", speaker: "Iliyan Panchev, Ivan Atanasov", start: new Date(2016, 5, 16, 11, 45), end: new Date(2016, 5, 16, 12, 15), isFav: false },
    { id: 3, title: "Sitefinity - the CMS of Choice for the Big Players", speaker: "Grirgori Karanikolov", start: new Date(2016, 5, 16, 11, 45), end: new Date(2016, 5, 16, 12, 15), isFav: false },
    { id: 4, title: "Sitefinity Professional Services", speaker: "Peter Marinov", start: new Date(2016, 5, 16, 13, 30), end: new Date(2016, 5, 16, 14, 0), isFav: false },
    { id: 5, title: "Introducing Progress Corticon", speaker: "Brent Adonis", start: new Date(2016, 5, 16, 13, 30), end: new Date(2016, 5, 16, 14, 0), isFav: false },
    { id: 6, title: "OpenEdge: A History of Making Developers Productive", speaker: "Bill Wood", start: new Date(2016, 5, 16, 16, 40), end: new Date(2016, 5, 16, 17, 30), isFav: false },
    { id: 7, title: "Women@Progress Event", speaker: "Melissa Puls", start: new Date(2016, 5, 16, 16, 40), end: new Date(2016, 5, 16, 17, 30), isFav: false },
]

@Injectable()
export class SessionsService {
    public getSessions(): Session[] {
        return _sessions;
    }
}


