import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GadgetsService } from './service/gadgets.service';
import { GadgetListComponent } from './components/gadget-list/gadget-list.component';
import { SearchComponent } from './components/search/search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GadgetListComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cp1';
  gadgetsService = inject(GadgetsService)
}
