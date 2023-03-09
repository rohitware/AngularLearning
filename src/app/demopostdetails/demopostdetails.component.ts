import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-demopostdetails',
  templateUrl: './demopostdetails.component.html',
  styleUrls: ['./demopostdetails.component.css']
})
export class DemopostdetailsComponent implements OnInit {

  arrPostById: Post[] = [];

  // di 
  constructor(private _route: ActivatedRoute, private _postService: PostService) { }

  ngOnInit() {

    let id = this._route.snapshot.params['id'];

    this._postService.getPostById(id).subscribe(res => {
      this.arrPostById = res;
      console.log(res);

    })

  }

}
