// @ts-ignore
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { InputViewComponent } from './input-view/input-view.component';
import {OutputViewComponent} from './output-view/output-view.component';
const routes: Routes = [{
  path: '', component: InputViewComponent
}, {
  path: 'output', component: OutputViewComponent
}];
// @ts-ignore
@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false
      }
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
