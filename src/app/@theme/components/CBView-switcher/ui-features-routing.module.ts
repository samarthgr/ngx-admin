import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsComponent } from '../../../pages/ui-features/buttons/buttons.component';

const routes: Routes = [
  {
    path: 'buttons',
    component: ButtonsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiFeaturesRoutingModule { }
