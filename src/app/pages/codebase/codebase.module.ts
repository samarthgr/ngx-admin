import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { CodebaseRoutingModule } from './codebase-routing.module';
import { CodebaseComponent } from './codebase.component';
import { Flame6Component, Tab1Component, Tab2Component  } from './flame6/flame6.component';
import { Flame7Component } from './flame7/flame7.component';
import { Flame8Component } from './flame8/flame8.component';

const components = [
  CodebaseComponent,
  Flame6Component,
  Flame7Component,
  Flame8Component,
  Tab1Component,
  Tab2Component,
];

@NgModule({
  imports: [
    ThemeModule,
    CodebaseRoutingModule,
  ],
  declarations: [
    ...components,
  ],
  entryComponents: [
  ],
})
export class CodebaseModule { }
