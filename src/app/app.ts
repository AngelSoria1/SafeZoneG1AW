import { Component, signal } from '@angular/core';
import { Home } from "./components/home/home";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Home, RouterOutlet]
})
export class App {
  protected readonly title = signal('SafeZoneG1AW');
}
