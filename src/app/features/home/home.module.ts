import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ShareModule } from "../../share/share.module";
import { HomeComponent } from "./pages/home/home.component";
import { HomeRoutingModule } from "./home-routing.module";


@NgModule({
  declarations: [
   HomeComponent
  ],
  imports: [
    ShareModule,
    HomeRoutingModule
  ],
  exports: [
   HomeComponent,
   HomeRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {

}
