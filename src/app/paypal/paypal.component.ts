import { Component, OnInit } from '@angular/core';
import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';
import { CarritoService } from '../carrito.service';


@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {

  constructor (private carritoService: CarritoService){}

  public payPalConfig?: PayPalConfig;

  ngOnInit(): void {
    this.initConfig();
  }

  private initConfig(): void {
    this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
      commit: true,
      client: {
        sandbox: 'AYZiLhLSnvqWc_9J7y1ZaLQmn6MFCunCJbMhSJ4JcdfWvps9btDUdeuBALpw33Xew_mKflRW4rIykK5B',
      },
      button: {
        label: 'paypal',
      },
      onPaymentComplete: (data, actions) => {
        console.log('OnPaymentComplete');
        this.carritoService.generarPedido();
      },
      onCancel: (data, actions) => {
        console.log('OnCancel');
      },
      onError: (err) => {
        console.log('OnError');
      },
      transactions: [{
        amount: {
          currency: 'USD',
          total: this.carritoService.getTotal()
        }
      }]
    });
  }
}
