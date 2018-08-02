import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { CodebaseRoutingModule } from './codebase-routing.module';
import { CodebaseComponent } from './codebase.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { EchartsPieComponent } from './echarts-pie.component';

const components = [
  CodebaseComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    CodebaseRoutingModule,
    NgxEchartsModule,
  ],
  declarations: [
    ...components,
    EchartsPieComponent,
  ],
})
export class CodebaseModule { }
