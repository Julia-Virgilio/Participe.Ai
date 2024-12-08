import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  imports: [RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  profile: any;

  constructor(@Inject(AuthService) public auth: AuthService) {}

  ngOnInit(): void {
    // Obtenha o perfil do usuário se autenticado
    this.auth.user$.subscribe((profile) => {
      this.profile = profile;
    });
  }
}
