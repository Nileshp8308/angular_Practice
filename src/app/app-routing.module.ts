import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircleComponent } from './circle/circle.component';

const routes: Routes = [
  {path:'circle',component:CircleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
