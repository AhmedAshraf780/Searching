import { Component } from '@angular/core';
import { UserCardsComponent } from './components/user-cards/user-cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserCardsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'User Management System';
}
