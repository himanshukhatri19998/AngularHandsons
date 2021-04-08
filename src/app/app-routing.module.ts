import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { RegisterComponent } from './register/register.component';
import { SearchEmpComponent } from './search-emp/search-emp.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [{path:"findEmp",component:SearchEmpComponent},
{path:"register",component:RegisterComponent},
{path:"update",component:UpdateComponent},
{path:"delete",component:DeleteComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
