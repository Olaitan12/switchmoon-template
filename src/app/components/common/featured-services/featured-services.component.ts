import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-featured-services',
    templateUrl: './featured-services.component.html',
    styleUrls: ['./featured-services.component.scss']
})
export class FeaturedServicesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    singleServicesItem = [
        {
            icon: `flaticon-security`,
            title: `Prioritization`,
            // paragraph: `Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore. Quis ipsum suspendisse.`,
            detailsLink: `services-details`,
            btnText: `READ MORE`
        },
        {
            icon: `flaticon-antivirus`,
            title: `Threat Prediction`,
            // paragraph: `Lorem ipsum dolor sit amet,  adipiscing elit, sed do eiusmod tempor incididunt ut labore. Quis ipsum suspendisse.`,
            detailsLink: `services-details`,
            btnText: `READ MORE`
        },
        {
            icon: `flaticon-automation`,
            title: `Automated Remediation`,
            // paragraph: `Lorem ipsum dolor sit amet,  adipiscing elit, sed do eiusmod tempor incididunt ut labore. Quis ipsum suspendisse.`,
            detailsLink: `services-details`,
            btnText: `READ MORE`
        }
    ]

}