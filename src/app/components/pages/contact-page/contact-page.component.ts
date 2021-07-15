import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Switchmoon - Contact Us');
    }

    ngOnInit(): void {
    }

    submit(form: { name: any; email: any; number: any; subject: any; message: any; }){
        var name = form.name;
        console.log(name);
        
        var email = form.email;
        console.log(email);

        var number = form.number;
        console.log(number);
        
        var subject = form.subject;
        console.log(subject);
        
        var message = form.message;
        console.log(message);
    }

}