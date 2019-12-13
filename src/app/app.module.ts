import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputViewComponent} from './input-view/input-view.component';
import {OutputViewComponent} from './output-view/output-view.component';

@NgModule({
  declarations: [
    AppComponent,
    InputViewComponent,
    OutputViewComponent
  ],
    imports: [
        BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
