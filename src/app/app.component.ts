import { Component } from '@angular/core';
import { sum, formatText } from './training';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  result = sum(5, 10);
  message = formatText("hello", "uppercase");
}