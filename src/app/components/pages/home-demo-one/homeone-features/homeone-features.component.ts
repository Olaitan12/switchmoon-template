import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-features',
    templateUrl: './homeone-features.component.html',
    styleUrls: ['./homeone-features.component.scss']
})
export class HomeoneFeaturesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    singleFeaturesBox = [
        {
            icon: `flaticon-video-conference`,
            title: `Security Advisory`,
            paragraph: `We aim to deliver the very highest levels of service, knowledge, experience, flexibility and reliability.`,
            link: `services-details`,
            linkText: `READ MORE`
        },
        {
            icon: `flaticon-call-center-agent`,
            title: `Technical Assurance`,
            paragraph: `Service Beyond the Initial Project.`,
            link: `services-details`,
            linkText: `READ MORE`
        },
        {
            icon: `flaticon-cyber-security`,
            title: `Managed Services`,
            paragraph: `Providing many options to reach us for customer support and following through in a timely manner gives evidence to our customers that we care about their business.`,
            link: `services-details`,
            linkText: `READ MORE`
        },
        {
            icon: `flaticon-hacker`,
            title: `Remote Workers`,
            paragraph: `We understand that our clients and potential customers have a choice in who provides them with IT services; therefore, we strive each day to earn the trust and confidence of our partners. `,
            link: `services-details`,
            linkText: `READ MORE`
        }
    ]

}