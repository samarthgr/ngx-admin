import { Component, Input, ViewChild } from '@angular/core';
import { NbPopoverDirective } from '@nebular/theme';
import { NbJSThemeOptions } from '@nebular/theme/services/js-themes/theme.options';

import { CBViewswitcherlistComponent } from './CBView-switcher-list/CBView-switcher-list.component';

@Component({
  selector: 'ngx-cbview-switcher',
  templateUrl: './CBView-switcher.component.html',
  styleUrls: ['./CBView-switcher.component.scss'],
})
export class CBViewSwitcherComponent {
  @ViewChild(NbPopoverDirective) popover: NbPopoverDirective;

  @Input() showTitle: boolean = true;

  switcherListComponent = CBViewswitcherlistComponent;
  theme: NbJSThemeOptions;
}
