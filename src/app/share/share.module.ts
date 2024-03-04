import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";

import { CommonModule } from "@angular/common";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { DateAdapter, MAT_DATE_FORMATS, MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';

import { FormsModule } from "@angular/forms";

import { MatExpansionModule } from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';

import { ShareButtonModule } from 'ngx-sharebuttons/button';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

import { PICK_FORMATS, PickDateAdapter } from "../core/config/dateTimeFormatMatUI";

import { MatTabsModule } from '@angular/material/tabs';
import { ClickOutsideDirective } from "./directives/ClickOutSideDirective";
import { ngx_translate_config } from "../core/config/ngxTranslateConfig";
import { CommonLayoutComponent } from "./components/layouts/common-layout/common-layout.component";
import { GameHeaderComponent } from './components/headers/game-header/game-header.component';


const materialModules: any[] = [
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatDatepickerModule,
  MatCardModule,
  MatNativeDateModule,
  MatDialogModule,
  MatExpansionModule,
  CdkAccordionModule,
  MatTabsModule
]

const directives: any[] = [
  ClickOutsideDirective
]

const components: any[] = [
  CommonLayoutComponent,
  GameHeaderComponent,
]

@NgModule({
  declarations: [
    ...components,
    ...directives,
  ],
  imports: [
    ...materialModules,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    ShareButtonModule,
    ShareButtonsModule,
    //ShareIconsModule,
    TranslateModule.forChild(ngx_translate_config)
  ],
  exports: [
    ...components,
    ...materialModules,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    ShareButtonModule,
    ShareButtonsModule,
    //ShareIconsModule,
  ],
  providers: [
    {provide: DateAdapter, useClass: PickDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: PICK_FORMATS}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShareModule {

}
