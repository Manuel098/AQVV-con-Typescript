import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Urls } from './urls';

@Injectable({ providedIn: 'root' })

export class Globals {
    constructor(private http: HttpClient, private router: Router) {}

    getUsers() {
        return new Promise(res => {
            this.http.get(Urls.baseURL + 'users')
            .subscribe(response => {
                res(response);
            });
        });
    }
    getUsersWith() {
        return new Promise(res => {
            this.http.get(Urls.baseURL + 'users/char')
            .subscribe(response => {
                res(response);
            });
        });
    }

    postUsers(name: string, url:string , caracterAdded){
        return new Promise( res => {
            this.http.post(Urls.baseURL + 'users/', {
                username: name,
                user_url: url,
                charac: caracterAdded
            }).subscribe(response => {
                console.log(response);
            });
        });
    }

    deleteUser(id:string){
        return new Promise( res => {
            this.http.delete(Urls.baseURL + 'users/'+id).subscribe(response => {
                res(response);
            });
        });
    }

    getCharact(){
        return new Promise(res => {
            this.http.get(Urls.baseURL + 'charac').subscribe(response =>{
                res(response);
            })
        });
    } 
}