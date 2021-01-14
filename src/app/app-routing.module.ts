import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PullsComponent } from './pulls/pulls.component';
import { AddPullComponent } from './add-pull/add-pull.component';
import { UpdatePullComponent } from './update-pull/update-pull.component';

const routes: Routes = [
{path: "pulls", component : PullsComponent},
{path: "add-pull", component : AddPullComponent},
{path: "updatePull/:id", component: UpdatePullComponent},
{path: "", redirectTo: "pulls", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
