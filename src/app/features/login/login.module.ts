import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ShareModule } from "../../share/share.module";
import { LoginComponent } from "./pages/login/login.component";


@NgModule({
  declarations: [
   LoginComponent
  ],
  imports: [
    ShareModule
  ],
  exports: [
   LoginComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule {

}
