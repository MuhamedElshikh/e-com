import { Pipe, PipeTransform } from '@angular/core';
import { product } from '../../interfaces/prducts';

@Pipe({
  name: 'filterByName',
  standalone: true,
})
export class FilterByNamePipe implements PipeTransform {
  transform(product: product[], searchkay:string): product[] {
    return product.filter(ele=>{
     return ele.title.toLocaleLowerCase().includes(searchkay.toLocaleLowerCase())});
  }
}
