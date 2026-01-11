import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';
import { Contact } from './contact/contact';

// app.routes.ts
export const routes: Routes = [
{path: '', component:Home},
{path: 'contact', component:Contact},
{ path: '', pathMatch: 'full', redirectTo: 'book' },
{ path: '', pathMatch: 'full', redirectTo: 'feature' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
