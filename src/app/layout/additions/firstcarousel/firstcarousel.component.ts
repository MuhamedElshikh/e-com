import { Component } from '@angular/core';
import { CarouselModule , OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-firstcarousel',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './firstcarousel.component.html',
  styleUrl: './firstcarousel.component.scss'
})
export class FirstcarouselComponent {
 customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }
}
