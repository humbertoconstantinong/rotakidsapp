import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'euchegueimamae';

  constructor(private router: Router){}

  ngOnInit(): void {
  }

  disableHeader(){
    if(this.router.url == '/'){
      return false
    }
    return true;
  }
}
