import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Output() pageChange = new EventEmitter<{ title: string; subTitle?: string }>();

  menuItems = [
    {
      title: 'Painel de controle',
      icon: 'fa-solid fa-chart-simple',
      subMenu: [
        { label: 'Gestão de água', link: '/agua' },
        { label: 'Gestão de energia', link: '/energia' },
        { label: 'Coleta de lixo', link: '/reciclagem' },
      ],
    },
    {
      title: 'Sobre',
      icon: 'fa-solid fa-layer-group',
      subMenu: [{ label: 'Vantagens por ponto', link: '/about/advantages' }],
    },
    {
      title: 'Centro de aprendizado',
      icon: 'fa-solid fa-book-bookmark',
      link: '/aprendizado',
    },
    {
      title: 'Mapa',
      icon: 'fa-solid fa-street-view',
      link: '/map',
    },
    {
      title: 'Feedback',
      icon: 'fa-solid fa-comments',
      link: '/feedback',
    },
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

  onMenuClick(menu: any, subItem?: string): void {
    this.pageChange.emit({
      title: menu.title,
      subTitle: subItem?.replace('• ', '') || undefined,
    });
  }
}
