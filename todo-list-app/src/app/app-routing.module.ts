import { ServicesComponent } from './my-components/services/services.component';
import { AboutComponent } from './my-components/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './my-components/todos/todos.component';

const routes: Routes = [
    { path: '', component: TodosComponent},
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
