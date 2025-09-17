import { Component, signal, OnInit, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, AfterViewInit {
  protected readonly title = signal('Modin Barbería');

  ngOnInit() {
    // Configurar el observer para las animaciones
    this.setupScrollAnimations();
  }

  ngAfterViewInit() {
    // Asegurar que las animaciones se configuren después de que la vista esté lista
    setTimeout(() => {
      this.setupScrollAnimations();
    }, 100);
  }

  private setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observar todos los elementos con clase fade-in
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
      observer.observe(el);
    });
  }
}
