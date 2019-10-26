import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/providers/users.service';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.page.html',
  styleUrls: ['./streams.page.scss'],
})
export class StreamsPage implements OnInit {
  segment: any = 'ion-sb-0';
  isPost = true;
  isTopPosts = false;
  constructor(private userSer: UsersService) { }

  ngOnInit() {
    this.userSer.getAllUsers().subscribe(
      data => console.log(data)
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
