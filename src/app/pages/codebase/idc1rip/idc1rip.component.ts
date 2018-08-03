import { Component, OnInit } from '@angular/core';

import { CodebaseStatsService } from '../../../@core/data/codebase-stats.service';

@Component({
  selector: 'ngx-idc1rip',
  templateUrl: './idc1rip.component.html',
  styleUrls: ['./idc1rip.component.scss'],
})
export class Idc1ripComponent implements OnInit {

  public data: Array<any>;

  constructor(private cService: CodebaseStatsService) {

    this.data = this.cService.getData();
  }

  ngOnInit() {
  }

}
