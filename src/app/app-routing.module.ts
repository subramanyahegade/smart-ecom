import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
const routes: Routes = [
  {
    path: 'card',
    component: CardComponent
  },
  {
    path: '',
    redirectTo: 'card',
    pathMatch: 'full'
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
