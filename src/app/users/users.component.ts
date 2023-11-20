import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
   usersList: any = [];
  onUserAdded(event: string){
    this.usersList.push(event);
  }
}
