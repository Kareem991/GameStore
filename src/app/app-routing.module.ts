import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: 'games/:id' , component: GameComponent} ,
  {path: 'signup' , component: SignupComponent} ,
  {path: '' , pathMatch: 'full', redirectTo: 'home'},


];
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
