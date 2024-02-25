import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ngx_translate_config } from './core/config/ngxTranslateConfig';
import { CommonLayoutComponent } from './share/components/layouts/common-layout/common-layout.component';
import { ShareModule } from './share/share.module';
import { LoginModule } from './features/login/login.module';
import { HomeModule } from './features/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    LoginModule,
    HomeModule,
    ShareModule,
    TranslateModule.forRoot(ngx_translate_config),
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
