import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, RouterLink], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class AppComponent {
  title = 'marati';
}
