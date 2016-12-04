/* tslint:disable:no-unused-variable */

import { TestBed, async, tick, inject } from '@angular/core/testing';
import { MessageService } from './message.service';
import { ConnectionBackend } from '@angular/http';
import { BaseRequestOptions, RequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('MessageServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService, Http, { provide: RequestOptions, useClass: BaseRequestOptions }, { provide: ConnectionBackend, useClass: MockBackend }]
    });
  });

  it('should ...', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));

  it('should return mock message', inject([MessageService, ConnectionBackend], (service: MessageService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe(conn => {
          conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify('{message:"ola"}') })));
        });
      service.getMessage().then( message => {
        expect(message).toEqual("Mock message");
        done();
      });
      //tick();
      //expect(service.getMessage()).toEqual("Mock message");
    }));

});
