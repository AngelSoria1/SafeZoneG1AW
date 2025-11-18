import { Component } from '@angular/core';
import { Alertalistar } from './alertalistar/alertalistar';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-alerta',
  imports: [Alertalistar,RouterOutlet],
  templateUrl: './alerta.html',
  styleUrl: './alerta.css',
})
export class Alerta {
    constructor(public route:ActivatedRoute) {}
}
