import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CandidatesComponent } from './pages/candidates/candidates.component';
import { QuestionComponent } from './pages/question/question.component';
import { ManageTestsComponent } from './pages/manage-tests/manage-tests.component';
import { AddTestComponent } from './pages/manage-tests/add-test/add-test.component';
import { ListTestComponent } from './pages/manage-tests/list-test/list-test.component';



const routes: Routes = [
  {path: '', redirectTo: 'page', pathMatch: 'full'},
  {path: 'page', component: PagesComponent, children: [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'candidates', component: CandidatesComponent},
    {path: 'questions', component: QuestionComponent},
    {path: 'tests', component: ManageTestsComponent, children:[
      {path: '', redirectTo: 'list-test', pathMatch: 'full'},
      {path: 'list-test', component: ListTestComponent},
      {path: 'add-test', component: AddTestComponent}
    ]}
  ]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
