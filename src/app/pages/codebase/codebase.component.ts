import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-codebase',
  templateUrl: './codebase.component.html',
  styleUrls: ['./codebase.component.scss'],
})
export class CodebaseComponent implements OnInit {

  public codebase = 'flame7';

  constructor() { }

  ngOnInit() {
  }

}
