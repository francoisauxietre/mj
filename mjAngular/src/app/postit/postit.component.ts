import { Component, OnInit } from '@angular/core';
import {PostIt} from '../../model/PostIt';

@Component({
  selector: 'app-postit',
  templateUrl: './postit.component.html',
  styleUrls: ['./postit.component.css']
})
export class PostitComponent implements OnInit {
  private postIts: Array<PostIt>;
  private test: boolean;

  constructor() { }

  ngOnInit() {
  }

  addPostButton() {
    const post = new PostIt();
    this.postIts.push(post);
    console.log(this.postIts[0]);
    this.test = true;
  }
}
