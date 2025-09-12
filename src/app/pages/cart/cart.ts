import { Component } from '@angular/core';
import { Nav } from '../../shared/nav/nav';
import { Button } from '../../UI/button/button';

@Component({
  selector: 'app-cart',
  imports: [Nav, Button],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {}
