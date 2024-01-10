import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor( private router: Router
  ) { }
  activeRoteiro = false;
  activeBuscar = false;
  activePagamento = false;
  activeUser = false;
  activeSair = false;
  isLogedIn = false;
  ngOnInit(): void {
  }
  changeDrawer(){
    
  }
  component: string = '';

  openComponent(event: string){
    this.component = event;
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/');
  }

  openRoteiro(){
    this.activeRoteiro = true;
    this.activeBuscar = false;
    this.activePagamento = false;
    this.activeSair = false;
    this.activeUser = false;
  }
  openUser(){
    this.activeRoteiro = false;
    this.activeBuscar = false;
    this.activePagamento = false;
    this.activeSair = false;
    this.activeUser = true;
  }
  openPagamento(){
    this.activeRoteiro = false;
    this.activeBuscar = false;
    this.activePagamento = true;
    this.activeSair = false;
    this.activeUser = false;
    this.openComponent('financial');
  }
  openBuscar(){
    this.activeRoteiro = false;
    this.activeBuscar = true;
    this.activePagamento = false;
    this.activeSair = false;
    this.activeUser = false;
    this.openComponent('students');
  }
  openSair(){
    this.activeRoteiro = false;
    this.activeBuscar = false;
    this.activePagamento = false;
    this.activeSair = true;
    this.activeUser = false;
  }
  
}
