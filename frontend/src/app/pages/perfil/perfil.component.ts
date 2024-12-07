import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-perfil',
  imports: [CommonModule, RouterModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Escuta alterações no fragmento
    this.route.fragment.subscribe((fragment: string | null) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          // Rola suavemente até o elemento
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}
