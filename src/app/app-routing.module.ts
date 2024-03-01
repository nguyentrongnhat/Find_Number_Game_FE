import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/pages/login/login.component';
import { APP_LAYOUT } from './core/enum/appLayouts';

export enum APP_ROUTE {
  LOGIN = 'login',
  GAME = 'game',
  HOME = ''
}

const routes: Routes = [
  {
    path: APP_ROUTE.HOME,
    pathMatch: 'full',
    loadChildren: () => import('./features/home/home-routing.module').then(m => m.HomeRoutingModule),
  },
  {
    path: APP_ROUTE.GAME,
    pathMatch: 'full',
    loadChildren: () => import('./features/game/game.routing.module').then(m => m.GameRoutingModule),
  },
  {
    path: APP_ROUTE.LOGIN,
    component: LoginComponent,
    data: { layoutStructure: { layout: APP_LAYOUT.COMMON_LAYOUT, carousel: false, header: false, footer: true }}
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
