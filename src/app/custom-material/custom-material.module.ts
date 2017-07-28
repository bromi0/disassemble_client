import { NgModule } from '@angular/core';
import {MdButtonModule, MdInputModule} from '@angular/material';


@NgModule({
  imports: [
    MdButtonModule,
    MdInputModule
  ],
  exports: [
    MdButtonModule,
    MdInputModule
  ]
})
export class CustomMaterialModule {


}
