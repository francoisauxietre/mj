import { Component, OnInit } from '@angular/core';
import {PostIt} from '../../model/PostIt';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {ModalConfig} from '../config/modal-config';
import {DraggableModalComponent} from '../modal/draggable-modal.component';

@Component({
  selector: 'app-postit',
  templateUrl: './postit.component.html',
  styleUrls: ['./postit.component.css']
})
export class PostitComponent implements OnInit {
  postIts: Array<PostIt>;
  test: boolean;
  buttonText = 'Open Modal';

  modalRef: any;
  modalOptions: NgbModalOptions = ModalConfig;

  constructor(private modalService: NgbModal) {}

  openModal() {
    this.modalRef = this.modalService.open(DraggableModalComponent, this.modalOptions);
    this.modalRef.componentInstance.title = 'Drag Me!';
    this.modalRef.componentInstance.message = 'Try dragging this modal around using the modal header!';
    this.modalRef.componentInstance.onSubmitSubject
      .subscribe((res: boolean) => {
        this.buttonText = 'Open Modal Again!';
      });
  }


  ngOnInit() {
  }

  addPostButton() {
    const post = new PostIt();
    this.postIts.push(post);
    console.log(this.postIts[0]);
    this.test = true;
  }
}
