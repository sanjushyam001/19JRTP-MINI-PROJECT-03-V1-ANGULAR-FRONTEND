import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPlansComponent } from './search-plans/search-plans.component';

const routes: Routes = [
  {path:'search-plans',component:SearchPlansComponent},
  {path:'',redirectTo:'search-plans',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
