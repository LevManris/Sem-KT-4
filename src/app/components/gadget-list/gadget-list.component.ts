import { Component, inject } from '@angular/core';
import { GadgetsService } from '../../service/gadgets.service';
import { GadgetItemComponent } from '../gadget-item/gadget-item.component';

@Component({
  selector: 'app-gadget-list',
  standalone: true,
  imports: [GadgetItemComponent],
  templateUrl: './gadget-list.component.html',
  styleUrl: './gadget-list.component.scss'
})
export class GadgetListComponent {
  gadgetsService = inject(GadgetsService)
}
