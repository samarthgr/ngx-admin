import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'ngx-codebase',
  templateUrl: './codebase.component.html',
  styleUrls: ['./codebase.component.scss'],
})
export class CodebaseComponent implements OnInit {

  public codebase: String;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.codebase = params['name'];
    });
  }
}
