import { Component, ElementRef , AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const contDoubleVideo = this.elementRef.nativeElement.querySelector('.contDoubleVideo');
    const video = this.elementRef.nativeElement.querySelector('.video');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio >= 0.5) {
          setTimeout(() => {
            window.scrollTo({ 
              top: contDoubleVideo.offsetTop, behavior: 'smooth'});
          }, 2000); // Retraso de 2000 milisegundos (2 segundos)
        }
      });
    }, { threshold: 0.5 });

    observer.observe(contDoubleVideo);
  }

 playVideo(video: HTMLVideoElement) {
    video.play();
  }

  // Función para detener el video cuando se deja de hacer hover
  stopVideo(video: HTMLVideoElement) {
    video.pause();
    video.currentTime = 0;
  }
}
