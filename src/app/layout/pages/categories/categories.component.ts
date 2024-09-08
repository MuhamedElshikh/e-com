import { category } from './../../../shared/interfaces/cat';
import { Component } from '@angular/core';
import { CatService } from '../../../shared/servies/cat.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  category!:category
  constructor(private _CatService: CatService) {}
  ngOnInit() :void{
this.getallcat()
  }
getallcat(){
  this._CatService.getallcat().subscribe(res=>{
this.category = res


  })
}
}
