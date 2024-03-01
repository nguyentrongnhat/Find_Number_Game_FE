import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ShareModule } from "../../share/share.module";
import { SelectNumberComponent } from "./components/select-number/select-number.component";
import { GameRoutingModule } from "./game.routing.module";
import { TableNumberComponent } from "./components/table-number/table-number.component";
import { GameConsoleComponent } from "./pages/game-console/game-console.component";


@NgModule({
  declarations: [
   SelectNumberComponent,
   TableNumberComponent,
   GameConsoleComponent
  ],
  imports: [
    ShareModule,
    GameRoutingModule,
  ],
  exports: [
   SelectNumberComponent,
   TableNumberComponent,
   GameConsoleComponent,
   GameRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GameModule {

}
