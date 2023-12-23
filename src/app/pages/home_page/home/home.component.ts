import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  boxSearchVisible = false;

  onArrowClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {

      this.boxSearchVisible = !this.boxSearchVisible;
    }, 650);
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    // Obtém a posição do topo do componente em relação à parte superior da janela
    const componentTop = document.getElementById('closeBtn');
    if (componentTop) {
      if (componentTop.getBoundingClientRect().top < 0)
        this.boxSearchVisible = !this.boxSearchVisible;

    }
  }

}
