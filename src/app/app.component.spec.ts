/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MessageService } from './message.service';
import { Headers, Http } from '@angular/http';



describe( 'AppComponent', () => {
  
    var messageServiceStub = {
            getMessage() : Promise<string> {
                alert("stub called");
                return Promise.resolve("ola");
            }
    };

    beforeEach(() => {
        TestBed.configureTestingModule( {
            declarations: [
                AppComponent
            ],
            providers: [{ provide: MessageService, useValue: messageServiceStub }]
        });
    });

    it( 'should create the app', async(() => {
        let fixture = TestBed.createComponent( AppComponent );
        let app = fixture.debugElement.componentInstance;
        expect( app ).toBeTruthy();
    }) );

    it( `should have as title 'app works!'`, async(() => {
        let fixture = TestBed.createComponent( AppComponent );
        let app = fixture.debugElement.componentInstance;
        expect( app.title ).toEqual( '...' );
    }) );

    it( 'should render title in a h1 tag', async(() => {
        let fixture = TestBed.createComponent( AppComponent );
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect( compiled.querySelector( 'h1' ).textContent ).toContain( '...' );
    }) );
});
