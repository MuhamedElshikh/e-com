import { AfterViewInit, Component, OnInit } from '@angular/core';
import { OrderService } from '../../../../shared/servies/order.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { showorder } from '../../../../shared/interfaces/order';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-all-order',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './all-order.component.html',
  styleUrl: './all-order.component.scss',
})
export class AllOrderComponent implements OnInit  {
  userid!: string;
  allOrder!: showorder[];
  constructor(private _OrderService: OrderService) {}
  ngOnInit(): void {
    this.getAllOrder();
  }
  
  getAllOrder() {
    this._OrderService.getAllOrder(this.userid).subscribe((res) => {
      this.allOrder = res;
      
    });
  }
  toggleAccordion(index: number) {
  const body = document.getElementById(`accordion-collapse-body-${index}`);
  const isVisible = body?.classList.contains('hidden');
  
  // Close all other accordions
  document.querySelectorAll('[id^="accordion-collapse-body-"]').forEach((el) => {
    el.classList.add('hidden');
  });
  
  // Toggle the clicked accordion
  if (isVisible) {
    body?.classList.remove('hidden');
  } else {
    body?.classList.add('hidden');
  }
}
}
