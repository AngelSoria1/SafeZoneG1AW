import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Alertalistar } from './alertalistar/alertalistar';

@Component({
  selector: 'app-alerta',
  imports: [RouterOutlet,Alertalistar],
  templateUrl: './alerta.html',
  styleUrl: './alerta.css',
})
export class Alerta {
    constructor(public route:ActivatedRoute) {}
}
