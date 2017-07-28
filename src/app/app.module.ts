import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { CustomMaterialModule } from './custom-material/custom-material.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {NgPipesModule} from 'ngx-pipes';

import { AppComponent } from './app.component';
import { NumberPickerComponent } from './number-picker/number-picker.component';
import { FilterNumberOnlyDirective } from './filter-number-only.directive';
import { ButtonValueComponent } from './button-value/button-value.component';



@NgModule({
  entryComponents: [ButtonValueComponent],
  declarations: [
    AppComponent,
    NumberPickerComponent,
    FilterNumberOnlyDirective,
    ButtonValueComponent
  ],
  imports: [
    BrowserModule,
    NgPipesModule,
    NoopAnimationsModule,
    FormsModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
