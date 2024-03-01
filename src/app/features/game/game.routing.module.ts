import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SelectNumberComponent } from "./components/select-number/select-number.component";
import { GameConsoleComponent } from "./pages/game-console/game-console.component";

export const enum GAME_ROUTE {
  GAME = '',
}

const routes: Routes = [
  {
    path: GAME_ROUTE.GAME,
    pathMatch: 'full',
    component: GameConsoleComponent,
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class GameRoutingModule {}
