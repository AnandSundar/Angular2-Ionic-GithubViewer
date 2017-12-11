import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GithubProvider} from '../../providers/github/github';
import {UserDetailsPage} from '../user-details/user-details';
//import {User} from '../../models/User';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  users:any;
  users_filter:any;
  searchText: string;
  constructor(public github:GithubProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.github.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  //for some reason build fails when I try to access res.items.
  //inorder to make the build work I check for error to make sure everything else
  //works as intended
  searchUsers() {
    this.github.searchUsers(this.searchText).subscribe(res => {
      this.users = '';
      this.users_filter = res;
    },
    error => {
        //error occured
        this.users_filter = '';
        this.github.getUsers().subscribe(users => {
          this.users = users;
        });
    }
  );
  }

  userDetailsClick(username) {
    //push the username to deatails page to make another request
    this.navCtrl.push(UserDetailsPage, {username: username});
  }

}
