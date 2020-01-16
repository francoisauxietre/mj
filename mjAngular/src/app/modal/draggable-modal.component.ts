import { Router } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

declare var $: any;

@Component({
  selector: 'draggable-modal',
  templateUrl: 'draggable-modal.component.html'
})

export class DraggableModalComponent implements OnInit {

  @Output() onSubmitSubject: Subject<boolean> = new Subject<boolean>();
  title: '';
  message: '';

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit() {

    // tslint:disable-next-line:only-arrow-functions
    $(document).ready(function() {
      const modalContent: any = $('.modal-content');
      const modalHeader = $('.modal-header');
      modalHeader.addClass('cursor-all-scroll');
      modalContent.draggable({
          handle: '.modal-header'
      });
    });
   }

  close() {
    this.activeModal.close();
    this.onSubmitSubject.next(true);
  }

}
