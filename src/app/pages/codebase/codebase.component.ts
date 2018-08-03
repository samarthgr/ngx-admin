import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalComponent } from '../ui-features/modals/modal/modal.component';

@Component({
  selector: 'ngx-codebase',
  templateUrl: './codebase.component.html',
  styleUrls: ['./codebase.component.scss'],
})
export class CodebaseComponent implements OnInit {

  public codebase: String;

  constructor(private activatedRoute: ActivatedRoute, private modalService: NgbModal) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.codebase = params['name'];
    });
  }

  showLargeModal() {
    const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Large Modal';
    activeModal.componentInstance.modalContent = `<ngx-echarts-pie></ngx-echarts-pie>`;
  }

  showStaticModal() {
    const activeModal = this.modalService.open(ModalComponent, {
      size: 'sm',
      backdrop: 'static',
      container: 'nb-layout',
    });

    activeModal.componentInstance.modalHeader = 'Static modal';
    activeModal.componentInstance.modalContent = `<ngx-echarts-pie></ngx-echarts-pie>`;
  }
}
