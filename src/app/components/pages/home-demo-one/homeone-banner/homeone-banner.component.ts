import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-banner',
    templateUrl: './homeone-banner.component.html',
    styleUrls: ['./homeone-banner.component.scss']
})
export class HomeoneBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    mainBannerContent = [
        {
            bgImage: `assets/img/main-banner1.jpg`,
            title: `SWITCHMOON`,
            paragraph: `SWITCHMOON NIGERIA LIMITED is a diverse information technology professional Services Company founded on the vision of providing our clients with a competitive edge`,
            buttonBox: [
                {
                    buttonText: `GET STARTED`,
                    buttonIcon: `bx bxs-chevron-right`,
                    buttonLink: `contact`
                },
                // {
                //     buttonText: `SCHEDULE A DEMO`,
                //     buttonIcon: `bx bxs-chevron-right`,
                //     buttonLink: `contact`
                // }
            ]
        }
    ]

}