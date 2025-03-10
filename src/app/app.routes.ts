// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ChessComponent } from './chess/chess.component';
import { SudokuComponent } from './sudoku/sudoku.component';
import { GoComponent } from './go/go.component';
import { BlackjackComponent } from './blackjack/blackjack.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'chess', component: ChessComponent },
  { path: 'sudoku', component: SudokuComponent },
  {
    path: 'blackjack',
    component: BlackjackComponent,
  },
  { path: 'go', component: GoComponent },
];
