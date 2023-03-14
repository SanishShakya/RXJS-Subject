import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BehaviorSubjectComponent } from './components/behaviorSubject/behaviorSubject.component';
import { HomeComponent } from './components/home/home.component';
import { ReplaySubjectComponent } from './components/replay-subject/replay-subject.component';
import { SubjectComponent } from './components/subject/subject.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'behaviorSubject', component: BehaviorSubjectComponent },
  { path: 'replaySubject', component: ReplaySubjectComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
