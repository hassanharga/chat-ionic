import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/providers/post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit, AfterViewInit {

  post: any;
  postId: any;
  commentsArray: any = [];
  tabElement: any;
  comment: any = '';
  constructor(private route: ActivatedRoute, private postSer: PostService) { }

  getPost() {
    this.postSer.getPost(this.postId).subscribe(
      data => {
        // console.log(data);
        this.post = data.post;
        console.log(this.post);
        this.commentsArray = data.post.comments.reverse();
        // console.log(this.commentsArray);
      },
      err => {
        console.log(err);
      }
    );
  }
  addComment() {
    console.log(this.comment);
    // this.postSer.addComment(this.postId, this.comment).subscribe(
    //   data => {
    //     console.log(data);
    //     // this.commentForm.reset();
    //     //  this.socket.emit('refresh', {}); 
    //   },
    //   err => console.log(err)
    // );
  }

  ngOnInit() {
    this.tabElement = document.querySelector('.md.hydrated');
    this.route.params.subscribe(params => {
      this.postId = params['id'];
      // console.log(this.postId);
    })
    this.getPost();
  }
  ngAfterViewInit() {

    // (this.tabElement as HTMLElement).style.display = 'none';
  }

}
