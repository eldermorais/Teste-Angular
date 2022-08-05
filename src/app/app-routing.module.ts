import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RotateComponent } from './rotate/rotate.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "rotate",
    component: RotateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
