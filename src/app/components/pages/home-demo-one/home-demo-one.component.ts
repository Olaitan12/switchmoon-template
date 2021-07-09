import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-home-demo-one',
	templateUrl: './home-demo-one.component.html',
	styleUrls: ['./home-demo-one.component.scss']
})
export class HomeDemoOneComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('SWITCHMOON - IT Operations and Digital Transformation');
    }

	ngOnInit(): void {
	}

}