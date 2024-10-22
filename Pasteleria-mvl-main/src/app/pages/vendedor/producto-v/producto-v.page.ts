import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { AlertController , ToastController } from '@ionic/angular';

@Component({
  selector: 'app-producto-v',
  templateUrl: './producto-v.page.html',
  styleUrls: ['./producto-v.page.scss'],
})
export class ProductoVPage implements OnInit {

  constructor(private alertController: AlertController,
    private router: Router,
    private route: ActivatedRoute,
    private toastController: ToastController) { }

  ngOnInit() {
  }
  agregarCarrito(){
    this.alerta('Producto agregado', 'Su producto a sido agregado con exito al carrito');
  }
  async alerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
        },
        {
          text: 'Ir al carrito',
          handler: () => {
            this.router.navigate(['/carrito']);
        }
      }
      ]
    });
    await alert.present();
  }
}
