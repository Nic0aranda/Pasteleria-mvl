import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit{

  constructor(private menuCtrl: MenuController,private alertController: AlertController,  private router: Router, private toastController: ToastController) {}

  ngOnInit() {
    this.menuCtrl.enable(false,'vendedor')
    this.menuCtrl.enable(false,'comprador')

  }



  Comprador: any ={
  correo: '',
  telefono: '',
  contrasena: '',
  confirmarContrasena: ''
  }

  correo!:string;
  telefono!:string;
  contrasena!:string;
  confirmarContrasena!:string;

  
  formulario(){
    const patronEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const patronContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/;
    const patronTelefono = /^[0-9]{9}$/;

    if(this.correo == undefined
      || this.contrasena == undefined
      || this.confirmarContrasena == undefined
      || this.telefono == undefined
      || this.telefono == ""
      || this.correo == ""
      || this.contrasena == ""
      || this.confirmarContrasena == ""
    ){
      const Titulo = "Campos vacios"
      const Mensaje = "Todos los campos deben estar llenos"
      this.alerta(Titulo, Mensaje)
      return;
    }
    if(this.contrasena!= this.confirmarContrasena){
      const Titulo = "Contraseñas no coinciden"
      const Mensaje = "Las contraseñas deben ser iguales"
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

    if (!patronContrasena.test(this.contrasena)) {
      const Titulo = "Contraseña inválida";
      const Mensaje = "La contraseña debe tener entre 6 y 20 caracteres, incluyendo al menos una mayúscula, una minúscula y un dígito.";
      this.alerta(Titulo, Mensaje);
      return;
    }

    this.Comprador.correo = this.correo;
    this.Comprador.contrasena = this.contrasena;



    const Titulo = "Registro exitoso"
    const Mensaje = "Te has registrado correctamente, ahora te redirigiremos al inicio"
    this.presentToast(Titulo, Mensaje)
    this.router.navigate(['/inicio']);
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

  async presentToast(titulo: string, mensaje: string ) {
    const alert_t = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'top',
    });

    await alert_t.present();
  }
}