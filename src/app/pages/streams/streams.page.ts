import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/providers/users.service';
import { PostService } from 'src/app/providers/post.service';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.page.html',
  styleUrls: ['./streams.page.scss'],
})
export class StreamsPage implements OnInit {
  segment: any = 'ion-sb-0';
  isPost = true;
  isTopPosts = false;
  posts: any = [];
  topPosts: any = [];
  constructor(private userSer: UsersService, private postSer: PostService) { }

  ngOnInit() {
    this.postSer.getAllPosts().subscribe(
      data => {
        console.log(data);
        this.posts = data.posts;
        this.topPosts = data.topPosts;
      }
    );
  }

  segmentChanged(e) {
    // console.log(e.target.value);
    this.segment = e.target.value;
    // if (e.target.value === 'ion-sb-0') {
    //   this.isPost = true;
    //   this.isTopPosts = false;
    // } else {
    //   this.isPost = false;
    //   this.isTopPosts = true;
    // }
  }

}
