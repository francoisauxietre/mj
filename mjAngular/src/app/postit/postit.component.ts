import { Component, OnInit } from '@angular/core';
import {PostIt} from '../model/PostIt';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-postit',
  templateUrl: './postit.component.html',
  styleUrls: ['./postit.component.css']
})
export class PostitComponent implements OnInit {
  postIts: PostIt[] = [];
  test: boolean;

  ngOnInit() {
  }

  addPostButton() {
    const post = new PostIt();
    post.id = 1;
    post.text = 'texte';
    post.title = 'titre';
    this.postIts.push(post);
    console.log(this.postIts[0]);
    this.test = true;
  }

  removePostButton(postit: PostIt) {
    this.postIts = this.postIts.filter((value) => {
      return value !== postit;
    });
  }

  onTextChange(postit: PostIt, event: any) {
    const p = this.postIts.find((value) => {
      return value === postit;
    });
    p.text = event;
  }

  onTitleChange(postit: PostIt, event: any) {
    const p = this.postIts.find((value) => {
      return value === postit;
    });
    p.title = event;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.postIts, event.previousIndex, event.currentIndex);
  }

}
