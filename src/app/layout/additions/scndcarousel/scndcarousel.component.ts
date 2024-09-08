import { cat, category } from './../../../shared/interfaces/cat';
import { CatService } from './../../../shared/servies/cat.service';
import { Component, OnInit } from '@angular/core';
import { CarouselModule ,OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-scndcarousel',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './scndcarousel.component.html',
  styleUrl: './scndcarousel.component.scss',
})
export class ScndcarouselComponent implements OnInit {
  category!:cat[]
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
        items: 8,
      },
    },
    nav: true,
  };
  constructor(private _CatService: CatService) {}
  ngOnInit(): void {
  this.getallcat();  
  }
  getallcat(){
this._CatService.getallcat().subscribe((res)=>{
 this.category = res.data
})
  }
}
