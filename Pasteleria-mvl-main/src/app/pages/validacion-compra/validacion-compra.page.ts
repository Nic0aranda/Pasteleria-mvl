import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-validacion-compra',
  templateUrl: './validacion-compra.page.html',
  styleUrls: ['./validacion-compra.page.scss'],
})
export class ValidacionCompraPage implements OnInit {

  correo!:string;
  telefono!:string;

  constructor(private alertController: AlertController,  private router: Router, private toastController: ToastController) {}

  ngOnInit() {
  }

  formulario(){
    const patronEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const patronTelefono = /^[0-9]{9}$/;

    if(this.correo == undefined
      || this.telefono == undefined
      || this.telefono == ""
      || this.correo == ""){
        
          const Titulo = "Campos vacios"
          const Mensaje = "Todos los campos deben estar llenos"
          this.alerta(Titulo, Mensaje)
          return;
        
      }
    if(!patronTelefono.test(this.telefono)){
      const Titulo = "Teléfono inválido"
      const Mensaje = "Por favor, ingrese un número de teléfono válido.";
      this.alerta(Titulo, Mensaje);
      return;
    }
  
    if (!patronEmail.test(this.correo)) {
      const Titulo = "Correo inválido";
      const Mensaje = "Por favor, ingrese un correo electrónico válido.";
      this.alerta(Titulo, Mensaje);
      return;
    }
    const titulo = "Compra exitosa"
    const message = "Tu compra a sido registrada correctamente."
    this.alertaExito(titulo, message)
    return
  }

  /*alertas */
  async alerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

  async alertaExito(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: [
        {
          text: 'cancelar',
          role: 'cancel',
        },
        {
          text: 'Ir al Inicio',
          handler: () => {
            this.router.navigate(['/inicio']);
        }
      }
      ]
    });
    await alert.present();
  }

  async presentToast(titulo: string, mensaje: string ) {
    const alert_t = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'top',
    });

    await alert_t.present();
  }
}
