import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/providers/users.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(private userSer: UsersService) { }

  ngOnInit() {
    this.userSer.getAllUsers().subscribe(
      data => console.log(data)
    );
  }

}
