import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { HomeComponent } from 'src/app/shared/home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('meuElemento') meuElementoRef!: ElementRef;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  public userForm: FormGroup = this.formBuilder.group({
    email: [''],
    password: ['']
  })

  loginSubmit() {
    try {
      this.progress = true;
      this.loginService.login(this.userForm.value).subscribe(
        (res) => {
          if (res.token ) {
            localStorage.setItem("token", res.token.token)
            localStorage.setItem("email", res.email)
            this.router.navigate(["students"]).then(()=>{
              window.location.reload()
            })
          }else{
            this.progress = false;
            this.snackBar.open(res.message, "", {
              horizontalPosition: "center",
              verticalPosition: "bottom",
              duration: 2000,
            })
            this.progress = false;
          }
        }
      );
    } catch (error) { 
    }
  }
  
  hide = true;
  progress = false;
}
