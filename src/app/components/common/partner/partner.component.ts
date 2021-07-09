import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-partner',
    templateUrl: './partner.component.html',
    styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    partnerItem = [
        {
            img: `assets/img/partner/dimago.png`
        },
        {
            img: `assets/img/partner/frapapa.jpg`
        },
        {
            img: `assets/img/partner/soloti.png`
        },
        {
            img: `assets/img/partner/titan.png`
        }
    ]

    partnerSlides: OwlOptions = {
        loop: true,
		nav: false,
		dots: false,
		margin: 30,
		autoplay: true,
        autoplayTimeout: 4000,
		autoplayHoverPause: true,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		],
		responsive: {
			0: {
				items: 2
			},
			576: {
				items: 3
			},
			768: {
				items: 4
			},
			992: {
				items: 4
			}
		}
    }

}