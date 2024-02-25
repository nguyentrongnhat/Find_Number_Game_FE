import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";

export const enum NEWS_ROUTE {
  HOME = '',
}

const routes: Routes = [
  {
    path: NEWS_ROUTE.HOME,
    pathMatch: 'full',
    component: HomeComponent,
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
export class HomeRoutingModule {}
