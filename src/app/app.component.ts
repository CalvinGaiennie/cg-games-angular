import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg ms-auto">
      <div class="container d-flex">
        <a class="nav-link fs-4" routerLink="/">Home</a>
        <a class="nav-link fs-4" routerLink="/login">Login</a>
        <a class="nav-link fs-4" routerLink="/create-account">Create Account</a>
      </div>
    </nav>
    <div class="container mt-4">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cg-games-angular';
}
