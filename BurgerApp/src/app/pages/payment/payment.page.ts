import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
  standalone:false
})
export class PaymentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tipoHamburguesa: number = 30;
  cantidad: number = 1;
  papas: boolean = false;
  arosCebolla: boolean = false;
  tipoPago: string = 'efectivo';
  total: number = 0;

  calcularTotal() {
    let subtotal = this.tipoHamburguesa * this.cantidad;
    if (this.papas) subtotal += 30;
    if (this.arosCebolla) subtotal += 20;
    if (this.tipoPago === 'tarjeta') subtotal *= 1.05;
    this.total = subtotal;
  }
}
