import { Component, inject } from '@angular/core';
import { GadgetsService } from '../../service/gadgets.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  gadgetsService = inject(GadgetsService)
}
