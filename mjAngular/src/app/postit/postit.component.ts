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
  postIts: PostIt[] = [];
  test: boolean;
  buttonText = 'Open Modal';

  modalRef: any;
  modalOptions: NgbModalOptions = ModalConfig;

  constructor(private modalService: NgbModal) {}

  openModal() {
    this.modalRef = this.modalService.open(DraggableModalComponent, this.modalOptions);
    this.modalRef.componentInstance.title = 'Drag Me!';
    this.modalRef.componentInstance.message = 'test blablablablablabla';
    this.modalRef.componentInstance.onSubmitSubject
      .subscribe((res: boolean) => {
        this.buttonText = 'Open Post-it';
      });
  }


  ngOnInit() {
  }

  addPostButton() {
    const post = new PostIt();
    post.id = 1;
    post.text = 'test blablablablablablabla';
    post.title = 'titre';
    this.postIts.push(post);
    console.log(this.postIts[0]);
    this.test = true;
  }

  removePostButton(){

  }
}
