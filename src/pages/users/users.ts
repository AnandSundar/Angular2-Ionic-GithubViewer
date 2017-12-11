import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GithubProvider} from '../../providers/github/github';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  users: User[];
  searchText: string;
  constructor(public github:GithubProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.github.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  searchUsers() {
    this.github.searchUsers(this.searchText).subscribe(res => {
      this.users = res.items;
    });
  }

}
