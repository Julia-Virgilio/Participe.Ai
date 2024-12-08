import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-cadastro',
  imports: [RouterModule, CommonModule ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  profile: any;

  constructor(@Inject(AuthService) public auth: AuthService) {}

  ngOnInit(): void {
    // Obtenha o perfil do usuário se autenticado
    this.auth.user$.subscribe((profile) => {
      this.profile = profile;
    });
  }
}
