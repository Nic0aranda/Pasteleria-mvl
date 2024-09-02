import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AlertController, MenuController, ToastController } from '@ionic/angular';

interface Usuario {
  correo: string;
  telefono: string;
  contrasena: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuarios: Usuario[] = [
    {
      correo: 'ale.aranda@duocuc.cl',
      telefono: '990131943',
      contrasena: 'Nicolas12'
    }
  ];
  Comprador: { correo: string; contrasena: string } = {
    correo: '',
    contrasena: ''
  }

  correo!: string;
  contrasena!: string;

  constructor(private menuCtrl: MenuController, private alertController: AlertController, private toastController: ToastController,
    private router: Router, private activerouter: ActivatedRoute ) { this.activerouter.queryParams.subscribe(param =>{
     if(this.router.getCurrentNavigation()?.extras.state){
       this.usuarios = this.router.getCurrentNavigation()?.extras?.state?.['correo'];
       this.contrasena = this.router.getCurrentNavigation()?.extras?.state?.['contrasena'];
     }
   })}

  ngOnInit() {
    this.menuCtrl.enable(false, 'vendedor');
    this.menuCtrl.enable(false, 'comprador');
  }

  async iniciarSesion() {
    const patronEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const patronContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/;
    let navigationextras: NavigationExtras ={
      state: {
        correo: this.correo,
        contrasena: this.contrasena,
      }
    }

    if (!this.correo || !this.contrasena) {
      await this.alerta('Campos vacíos', 'Todos los campos deben estar llenos');
      return;
    }

    if (!patronEmail.test(this.correo)) {
      await this.alerta('Correo inválido', 'Por favor, ingrese un correo electrónico válido.');
      return;
    }

    if (!patronContrasena.test(this.contrasena)) {
      await this.alerta('Contraseña inválida', 'La contraseña debe tener entre 6 y 20 caracteres, incluyendo al menos una mayúscula, una minúscula y un dígito.');
      return;
    }

    const usuarioRegistrado = this.usuarios.find(
      u => u.correo === this.correo && u.contrasena === this.contrasena
    );

    if (usuarioRegistrado) {
      await this.presentToast('Inicio de sesión exitoso', 'Lo redirigiremos al inicio');
      this.router.navigate(['/inicio'], navigationextras);
    } else {
      await this.alerta('Error al iniciar sesión', 'Correo o contraseña incorrectos');
    }
  }


  async alerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentToast(titulo: string, mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'top',
    });
    await toast.present();
  }
}
