import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectComponent } from './components/subject/subject.component';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';
import { Component3Component } from './components/component3/component3.component';
import { Behave1Component } from './components/behave1/behave1.component';
import { Behave2Component } from './components/behave2/behave2.component';
import { Behave3Component } from './components/behave3/behave3.component';
import { BehaviorSubjectComponent } from './components/behaviorSubject/behaviorSubject.component';
import { HomeComponent } from './components/home/home.component';
import { ReplaySubjectComponent } from './components/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './components/async-subject/async-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    Behave1Component,
    Behave2Component,
    Behave3Component,
    BehaviorSubjectComponent,
    HomeComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
