import { Component } from '@angular/core';
import { PrandService } from '../../../shared/servies/prand.service';
import { Metadata, prand, prands } from '../../../shared/interfaces/prand';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss',
})
export class BrandsComponent {
  prands!: prands;
  Metadata!: Metadata;
  currentPage: number = 1;
  totalPages: number = 0;
  pages: number[] = [];
  constructor(private _PrandService: PrandService) {}
  ngOnInit(): void {
    this.getAllPrands(this.currentPage);
  }
  getAllPrands(page: number) {
    this._PrandService.getallPrands(page).subscribe((res) => {
      this.prands = res;
      this.totalPages = res.metadata.numberOfPages;
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    });
  }
  loadPage(page: number) {
    this.currentPage = page;
    this.getAllPrands(this.currentPage);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  loadNextPage() {
    if (this.currentPage <= this.totalPages) {
      this.currentPage += 1;
      this.getAllPrands(this.currentPage);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      // console.log(this.currentPage);
    }
  }

  loadPrevPage() {
    if (this.currentPage >= this.totalPages) {
      this.currentPage -= 1;
      this.getAllPrands(this.currentPage);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }
}
