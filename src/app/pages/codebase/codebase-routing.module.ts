import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Flame6Component, Tab1Component, Tab2Component } from './flame6/flame6.component';
import { Flame7Component} from './flame7/flame7.component';
import { Flame8Component} from './flame8/flame8.component';
import { CodebaseComponent } from './codebase.component';


const routes: Routes = [{
  path: '',
  component: CodebaseComponent,
  children: [ {
    path: 'flame6',
    component: Flame6Component,
    children: [{
      path: '',
      redirectTo: 'tab1',
      pathMatch: 'full',
    }, {
      path: 'tab1',
      component: Tab1Component,
    }, {
      path: 'tab2',
      component: Tab2Component,
    }],
}, {
  path: 'flame7',
  component: Flame7Component,
  children: [{
    path: '',
    redirectTo: 'tab1',
    pathMatch: 'full',
  }, {
    path: 'tab1',
    component: Tab1Component,
  }, {
    path: 'tab2',
    component: Tab2Component,
  }],
}, {
  path: 'flame8',
  component: Flame8Component,
  children: [{
    path: '',
    redirectTo: 'tab1',
    pathMatch: 'full',
  }, {
    path: 'tab1',
    component: Tab1Component,
  }, {
    path: 'tab2',
    component: Tab2Component,
  }],
}],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodebaseRoutingModule { }
