import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { CodebaseRoutingModule } from './codebase-routing.module';
import { CodebaseComponent } from './codebase.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { EchartsPieComponent } from './echarts-pie.component';
import { ModalComponent } from '../ui-features/modals/modal/modal.component';
import { Idc1ripComponent } from './idc1rip/idc1rip.component';
import { CodebaseStatsService } from '../../@core/data/codebase-stats.service';

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
    ModalComponent,
    Idc1ripComponent,
  ],
  entryComponents: [
    ModalComponent,
  ],
  providers: [
    CodebaseStatsService,
  ]
})
export class CodebaseModule { }
