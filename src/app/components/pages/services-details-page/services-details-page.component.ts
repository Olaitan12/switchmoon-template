import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-services-details-page',
    templateUrl: './services-details-page.component.html',
    styleUrls: ['./services-details-page.component.scss']
})
export class ServicesDetailsPageComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Switchmoon - Services Details');
    }

    ngOnInit(): void {
    }

    pageTitle = [
        {
            pageTitle: `Our Capabilities`
        }
    ]
    servicesDetailsContent = [
        {
            title: `SWITCHMOON NIGERIA LIMITED has strong background in core areas of ICT`,
            paragraphList: [
                {
                    paragraph: `We recognize that ICT have developed in shapes and forms that require a dynamic follow up, and an integrated approach is required to meet the needs of our clientele.`
                },
                {
                    paragraph: `Our team of professional consultants has been providing customized enterprise solutions to organizations in various capacities. Each business and organization is dynamic and have unique requirements for their internal systems. To meet these needs, an "off-the-shelf" or "boxed" solution, at times, will not suffice, but a customized solution is what serves best. From concept to launch, we help businesses and organizations in the strategic planning, development, and implementation of their IT strategic goals. `
                }
            ]
        }
    ]
    servicesDetailsVideo = [
        {
            buttonText: `CONTACT US`,
            buttonLink: `contact`
        }
    ]

}