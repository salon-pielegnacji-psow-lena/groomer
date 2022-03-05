import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [ 
  { path: "start", component: LayoutComponent, pathMatch: 'full' },
  { path: "omnie", component: LayoutComponent, pathMatch: 'full' },
  { path: "kontakt", component: LayoutComponent, pathMatch: 'full' },
  { path: "wiecej", component: LayoutComponent, pathMatch: 'full' },
  { path: "oferta", component: LayoutComponent, pathMatch: 'full' },
  { path: "", component: LayoutComponent },
  { path: "**", component: LayoutComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
