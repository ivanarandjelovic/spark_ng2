import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Message} from './message';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MessageService {

    messageUrl = "http://localhost:4567/hello";
    
    constructor(private http: Http) { }
  
  getMessage() : Promise<string> {
      //alert("uh?");
      //return Promise.resolve("ola");
      return this.http.get(this.messageUrl)
      .toPromise()
      .then(response => { 
//          alert(response);
//          alert(response.json());
//          alert(response.json().message);
//          alert(response.json().message as string);
          return response.json().message as string
      })
      .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

}
