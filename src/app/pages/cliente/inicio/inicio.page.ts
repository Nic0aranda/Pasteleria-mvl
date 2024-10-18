import { Component, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { AlertController , ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pages-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements AfterViewInit {

  //creamos variables vacias para recibir datos del login
  correo!: string;
  contrasena!: string;

  //lista con los productos
  Productos: any[] = [
    {
      id: 1,
      nombre: 'Torta Selva negra',
      precio: 20000,
      img: 'https://i.imgur.com/RNp3AqO.png',
      descripcion: 'Está compuesta por varias capas de bizcochuelo de chocolate embebidas en kirsch e intercaladas con nata y cerezas y recubierta de crema chantillí, virutas de chocolate y cerezas.',
      tipo: 'Torta'
    },
    {
      id: 2,
      nombre: 'Torta Hojarasca Manjar Vainilla',
      precio: 30000,
      img: 'https://i.imgur.com/7KHeVF0.png',
      descripcion: 'Torta de delgadas capas de hojarasca, entrelazadas con manjar fresco y crema pastelera de vainilla, coronada con merengue italiano.',
      tipo: 'Torta'
    },
    {
      id: 3,
      nombre: 'Torta Amapolas',
      precio: 15000,
      img: 'https://i.imgur.com/DkQs2Xt.png',
      descripcion: 'Bizcocho blanco con semilla de amapola, manjar artesanal, crema chantilly, pastelera y mermelada de guinda. Decorada con crema chantilly, semilla de amapola y almendras laminadas.',
      tipo: 'Torta'
    },
    {
      id: 4,
      nombre: 'Kuchen de frambuesa y arándano',
      precio: 25000,
      img: 'https://i.imgur.com/TCOZpqV.png',
      descripcion: 'Este kuchen está elaborado con frambuesas y arándanos horneados, es un kuchen agridulce, donde el crumble es el final perfecto para darle el toque de dulzor a esta elaboración.',
      tipo: 'Kuchen'
    },
    {
      id: 5,
      nombre: 'Kuchen miga manzana',
      precio: 20000,
      img: 'https://i.imgur.com/5FtpZDl.png',
      descripcion: 'La preparación de este kuchen, lleva una conjugación perfecta de canela, manzanas rojas y verdes para lograr un nivel de ácido-dulce estudiado. Para rematar, un crumble de mantequilla que le termina de agregar textura y sabor a esta delicia.',
      tipo: 'Kuchen'
    },
    {
      id: 6,
      nombre: 'Kuchen de Nuez y naranja',
      precio: 22000,
      img: 'https://i.imgur.com/UpL2dhJ.png',
      descripcion: 'Crocante masa como base, rellena con abundante toffee de nuez. Especial para los días fríos. Deliciosa y cálida, el acompañamiento perfecto para un rico café o té o simplemente como postre.',
      tipo: 'Kuchen'
    },
    {
      id: 7,
      nombre: 'Brownie Chocolate',
      precio: 18000,
      img: 'https://i.imgur.com/nKUHiiK.png',
      descripcion: 'Un brownie es un bizcocho de chocolate pequeño, típico de la gastronomía de Estados Unidos. Se llama así por su color marrón oscuro, o brown en inglés.',
      tipo: 'Brownie'
    },
    {
      id: 8,
      nombre: 'Brownie Leche',
      precio: 15000,
      img: 'https://i.imgur.com/LlwfULV.png',
      descripcion: 'Este brownie representa una auténtica explosión de dulzura en el paladar, con sutiles matices lácteos que aportan un mayor deleite a las papilas gustativas.',
      tipo: 'Brownie'
    }
  ];

  currentIndex = 0;

  constructor(
    private alertController: AlertController,
    private router: Router,
    private route: ActivatedRoute,
    private toastController: ToastController
  ) {}

  ngAfterViewInit() {

    //recuperamos los parametros del login desde el historial
    this.route.queryParams.subscribe(params => {
      this.correo = window.history.state.correo;
      this.contrasena = window.history.state.contrasena;
    });
    
    //carrusel que funciona por posiciones
    const slides = document.querySelectorAll('.carousel-slide') as NodeListOf<HTMLElement>;
    const totalSlides = slides.length;

    const updateCarousel = (index: number) => {
      const offset = -index * 100; // Cada slide tiene un ancho del 100%
      const wrapper = document.querySelector('.carousel-wrapper') as HTMLElement;
      wrapper.style.transform = `translateX(${offset}%)`;
    };

    document.querySelector('.carousel-button.prev')?.addEventListener('click', () => {
      this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : totalSlides - 1;
      updateCarousel(this.currentIndex);
    });

    document.querySelector('.carousel-button.next')?.addEventListener('click', () => {
      this.currentIndex = (this.currentIndex < totalSlides - 1) ? this.currentIndex + 1 : 0;
      updateCarousel(this.currentIndex);
    });
  }

  //funcion que ejecuta la alerta
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


  async presentToast(titulo: string, mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'top',
    });
    await toast.present();
  }
}