import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { P404Component } from './pages/p404/p404.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ContactsComponent } from './pages/contacts/contacts.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: '**',
    component: P404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
