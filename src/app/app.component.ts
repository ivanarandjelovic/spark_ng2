import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { OnInit } from '@angular/core';
import { Message } from './message';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [MessageService]
})
export class AppComponent implements OnInit {

    title : string = '...';

    constructor( private messageService: MessageService ) {
    }

    ngOnInit(): void {
        alert("a?");
        this.messageService.getMessage().then(message => {this.title = message; });
    }
}
