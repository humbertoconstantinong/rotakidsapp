import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { SchoolService } from 'src/app/services/school.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addschools',
  templateUrl: './addschools.component.html',
  styleUrls: ['./addschools.component.scss']
})
export class AddschoolsComponent implements OnInit {

  constructor(private router: Router,private formBuilder: FormBuilder, private schoolService: SchoolService, private loaderService: LoaderService) { }

  ngOnInit(): void {
  }

  schoolForm: FormGroup = this.formBuilder.group({
    name: [''],
    street: [''],
    number: [''],
    neighborhood: [''],
    city: []
  })
    saveSchool(){
      this.loaderService.show();
      this.schoolService.createSchool(this.schoolForm.value).subscribe((res)=>{
        this.loaderService.hide();
        Swal.fire({
          title: "Sucesso!",
          icon: "success",
          confirmButtonColor: '#FFD54F',
        }).then((result)=>{
          if(result.isConfirmed){
            this.router.navigate(["schools"]).then(()=>{
              window.location.reload()
          });
          }
        })
        
      }
      )
    }
}
