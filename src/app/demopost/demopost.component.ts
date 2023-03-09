import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {

  arrPost: Post[] = [];
  // Di post service
  constructor(private _postService: PostService) { }

  ngOnInit() {
    this._postService.getPost().subscribe(res => {
      this.arrPost = res;
    })
  }

}
