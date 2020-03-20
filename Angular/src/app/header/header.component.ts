import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  opened = false;
  constructor(private router: Router) { 
    router.events.subscribe((val) => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
  }

  route(string){
    this.router.navigateByUrl('/'+string);
  }

}
