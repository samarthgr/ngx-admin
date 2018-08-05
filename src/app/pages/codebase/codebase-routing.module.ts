import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodebaseComponent } from './codebase.component';


const routes: Routes = [{
  path: '',
  component: CodebaseComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodebaseRoutingModule { }
