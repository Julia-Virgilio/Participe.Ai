import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  menuItems = [
    {
      title: 'Painel de controle',
      icon: 'fa-solid fa-chart-simple',
      subMenu: ['• Gestão de água', '• Gestão de energia', '• Coleta de lixo'],
    },
    {
      title: 'Sobre',
      icon: 'fa-solid fa-layer-group',
      subMenu: ['• Vantagens por ponto'],
    },
    {
      title: 'Centro de aprendizado',
      icon: 'fa-solid fa-book-bookmark',
    },
    {
      title: 'Mapa',
      icon: 'fa-solid fa-street-view',
    },
    {
      title: 'Feedback',
      icon: 'fa-solid fa-comments',
    }
  ];

  isActive: boolean[] = [];

  constructor() {
    this.isActive = new Array(this.menuItems.length).fill(false);
  }

  toggleSubMenu(index: number): void {
    if (this.menuItems[index].subMenu) {
      this.isActive[index] = !this.isActive[index];
    }
  }
}
