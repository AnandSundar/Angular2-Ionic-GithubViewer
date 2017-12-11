import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

//import {User} from '../users/Users';

@Injectable()
export class GithubProvider {

  client_id: string;
  client_secret: string;

  constructor(public http: HttpClient) {
    //this info is obtained from github
    this.client_id = 'cbee512f8f4bbb520687';
    this.client_secret = '831abb37b816f21d3d938d2b59f889b27d4334c9';
  }

  getUsers(){
    return this.http.get('https://api.github.com/users?client_id='+this.client_id+'&client_secret='+this.client_secret);
  }

  searchUsers(searchText){
    return this.http.get('https://api.github.com/search/users?q='+searchText+'&client_id='+this.client_id+'&client_secret='+this.client_secret);
  }

  //details page
  getUser(username) {
      return this.http.get('https://api.github.com/users/'+username+'?client_id='+this.client_id+'&client_secret='+this.client_secret);
  }

  getRepos(username) {
      return this.http.get('https://api.github.com/users/'+username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret);
  }

}
