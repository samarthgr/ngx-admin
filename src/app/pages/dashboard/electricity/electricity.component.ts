import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

import { ElectricityService } from '../../../@core/data/electricity.service';

@Component({
  selector: 'ngx-electricity',
  styleUrls: ['./electricity.component.scss'],
  templateUrl: './electricity.component.html',
})
export class ElectricityComponent implements OnDestroy {

  public data: Array<any>;
  public errMsg;

  type = 'week';
  types = ['week', 'month', 'year'];

  currentTheme: string;
  themeSubscription: any;

  constructor(private eService: ElectricityService, private themeService: NbThemeService) {

    this.eService.getData().subscribe(
      data => { this.data = data; },
      err => {
        console.error('Error saving electric data!' + err);
        this.errMsg = err;
      },
    );

    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
