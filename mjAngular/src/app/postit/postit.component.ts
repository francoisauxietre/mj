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

  removePostButton(postit: PostIt, event: any) {
    this.postIts = this.postIts.filter((value) => {
      return value !== postit;
    });
  }

  onTextChange(postit: PostIt, event: any) {
    let p = this.postIts.find((value) => {
      return value === postit;
    });
    p.text = event;
  }

  onTitleChange(postit: PostIt, event: any) {
    let p = this.postIts.find((value) => {
      return value === postit;
    });
    p.title = event;
    //console.log(p, p.title);
  }
}
