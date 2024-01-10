import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  component: string = '';

  openComponent(event: string){
    this.component = event;
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/');
  }

}
