import { Injectable } from '@angular/core';
import axios from 'axios';
import { Gadget } from '../types/gadget';

@Injectable({
  providedIn: 'root'
})
export class GadgetsService {
  gadgets: Gadget[] = []
  inputed: string = ''
  options: string[] = []
  selected: string = ''
  priceRange: number = 0
  ratingRange: number = 5

  constructor() {
    (async () => {
      const res: Gadget[] = await (await axios.get('https://dummyjson.com/products?limit=50')).data.products
      console.log(res);
      this.gadgets = res
      this.options = [...new Set(res.map(gadget => gadget.category))]
      this.priceRange = this.maxPrice() / 2
    })()

  }

  computedGadgets(): Gadget[] {
    return this.gadgets
      .filter(gadget => gadget.category.includes(this.selected))
      .filter(gadget => gadget.title.toLocaleLowerCase().includes(this.inputed.toLocaleLowerCase()))
      .filter(gadget => gadget.price <= this.priceRange)
      .filter(gadget => Math.round(gadget.rating) <= this.ratingRange)
  }

  maxPrice(): number {
    return Math.max(...this.gadgets.map(gadget => gadget.price))
  }
}
