import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  currentPage = { title: 'Painel de controle', subTitle: 'Serviços' };

  updatePage(page: { title: string; subTitle?: string }): void {
    this.currentPage = {
      title: page.title,
      subTitle: page.subTitle || '',
    };
  }
}
