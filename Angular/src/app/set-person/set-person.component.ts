import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material'
import { Globals } from '../../globals';
import { DeleteComponent } from '../modals/delete/delete.component';
import { AddUserComponent } from '../modals/add-user/add-user.component';

@Component({
  selector: 'app-set-person',
  templateUrl: './set-person.component.html',
  styleUrls: ['./set-person.component.scss']
})
export class SetPersonComponent implements OnInit {
  
  profiles;
  characteristics;

  constructor(private dialog: MatDialog, private globals: Globals) {
    
  }

  setProfiles(profiles){
    this.profiles = profiles;
  }

  ngOnInit() {
    this.globals.getUsers().then(res => {
      this.profiles = res;
    });
    this.globals.getCharact().then(res => {
      this.characteristics = res;
    })
  }
  addUser(){
    const dialogUser = this.dialog.open(AddUserComponent, {data:{username:'', user_url: '',caracterAdded:[], caracter:this.characteristics}});
    dialogUser.afterClosed().subscribe(result => {
      this.profiles.push({id:(this.profiles[this.profiles.length-1]['id']+1),username:result.username, user_url:result.user_url});
      this.globals.postUsers(result.username,result.user_url,result.caracterAdded);
      console.log(result);
    });
  }
  onDelete(id, name){
    const dialogRef = this.dialog.open(DeleteComponent,{data:{name:name, id: id}});
    dialogRef.afterClosed().subscribe(result => {
      this.globals.deleteUser(result).then(res=>{
        this.profiles = res;
      });
    });
  }
}
