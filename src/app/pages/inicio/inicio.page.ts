import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-pages-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements AfterViewInit {

  currentIndex = 0;

  ngAfterViewInit() {
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
}

