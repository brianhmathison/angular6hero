import { NgModule } from '@angular/core';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent}
];
