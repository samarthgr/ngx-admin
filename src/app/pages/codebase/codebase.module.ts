import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { CodebaseRoutingModule } from './codebase-routing.module';
import { CodebaseComponent } from './codebase.component';

const components = [
  CodebaseComponent,
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
