import { Component, Input } from '@angular/core';
import { Gadget } from '../../types/gadget';
import { CurrencyPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-gadget-item',
  standalone: true,
  imports: [JsonPipe, CurrencyPipe],
  templateUrl: './gadget-item.component.html',
  styleUrl: './gadget-item.component.scss'
})
export class GadgetItemComponent {
  @Input() gadget: Gadget
  stars: number[] = new Array(5)
  getRoundedRate(): number {
    return Math.round(this.gadget.rating)
  }
}
