import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultCepService } from 'src/app/services/consult-cep.service';
import { LoaderService } from 'src/app/services/loader.service';
import { LoginService } from 'src/app/services/login.service';
import { SchoolService } from 'src/app/services/school.service';
import { StudentService } from 'src/app/services/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addstudents',
  templateUrl: './addstudents.component.html',
  styleUrls: ['./addstudents.component.scss']
})
export class AddstudentsComponent implements OnInit {


constructor(private router: Router, private loaderService: LoaderService, private formBuilder: FormBuilder,private cepService: ConsultCepService, private loginService: LoginService, private schoolService: SchoolService, private studentService: StudentService) { }

  ngOnInit(): void {
    this.getSchools();
  }
  selectedFile!: File; 
  parentId: any;
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.studentForm.controls['imagem'].setValue(this.selectedFile);
    }
  }

  submitAluno(){
    const alunoData = new FormData();
    alunoData.append('name', this.studentForm.controls['name'].value);
    alunoData.append('last_name', this.studentForm.controls['last_name'].value);
    alunoData.append('gender', this.studentForm.controls['gender'].value);
    alunoData.append('street', this.studentForm.controls['street'].value);
    alunoData.append('neighborhood', this.studentForm.controls['neighborhood'].value);
    alunoData.append('city', this.studentForm.controls['city'].value);
    alunoData.append('zip_code', this.studentForm.controls['zip_code'].value);
    alunoData.append('number', this.studentForm.controls['number'].value);
    alunoData.append('escolaId', this.studentForm.controls['escolaId'].value);
    alunoData.append('parentId', this.parentId);
    alunoData.append('age', this.studentForm.controls['age'].value);
    alunoData.append('complement', this.studentForm.controls['complement'].value);
    alunoData.append('turn', this.studentForm.controls['turn'].value);
    alunoData.append('parent_document_number', this.studentForm.controls['parent_document_number'].value);
    alunoData.append('latitude', this.studentForm.controls['latitude'].value);
    alunoData.append('longitude', this.studentForm.controls['longitude'].value);
    alunoData.append('image', this.selectedFile);
    
    return alunoData;
  }

  submitParent(){
    const parentData = {
      name: this.parentForm.controls['name'].value,
      last_name: this.parentForm.controls['last_name'].value,
      phone: this.parentForm.controls['phone'].value,
      document_number: this.parentForm.controls['document_number'].value,
    }

    return parentData
  }

  schools: Array<any> = [];
  studentForm: FormGroup = this.formBuilder.group({
    image: [''],
    name: [''],
    last_name: [''],
    gender: [''],
    street: [''],
    neighborhood: [''],
    city: [''],
    zip_code: [''],
    number: [''],
    escolaId: [],
    parentId: [],
    age: [''],
    complement: [''],
    turn:[''],
    // UserId:[],
    parent_document_number:[''],
    // price: [''],
    // date: ['']
    latitude: [''],
    longitude: ['']
  })

  public parentForm: FormGroup = this.formBuilder.group({
    name: [''],
    last_name: [''],
    phone: [''],
    document_number: ['']
  })

  getAdress(cep: string){
    this.cepService.getAdress(cep).subscribe(
      (res)=>{
        this.studentForm.controls["street"].setValue(res.logradouro);
        this.studentForm.controls["neighborhood"].setValue(res.bairro);
        this.studentForm.controls["city"].setValue(res.localidade);
      }
    )
  }

  getParentForDocumentNumber(documentNumber: string){
    this.loginService.getParent(documentNumber).subscribe(
      (res)=>{
        if(res != ''){
          this.parentForm.controls["name"].setValue(res.name);
          this.parentForm.controls["lastName"].setValue(res.lastName);
          this.parentForm.controls["phone"].setValue(res.phone);
          this.parentForm.controls["documentNumber"].setValue(res.documentNumber);
          this.parentForm.disable();
        }(err: any) => {
          this.parentForm.controls["name"].enable();
        }
      }
    )
  }

  getSchools(){
    this.schoolService.getAll().subscribe(
      (res)=>{
        for(let school of res){
          this.schools.push(school)
        }
      }
    )
  }

  createStudent(){
    this.getLatitudeLongitude();
    // this.studentService.create(this.studentForm.value).subscribe()
  }
  createParent(){
    this.studentService.createParent(this.submitParent()).subscribe(
      (res)=>{
        if(res){
          this.parentId = res.id;
          this.createStudent()
        }
      }
    )
  }

  getLatitudeLongitude(){
    let city = this.studentForm.controls['city'].value;
    let number = this.studentForm.controls['number'].value;
    let neighborhood = this.studentForm.controls['neighborhood'].value;
    let street = this.studentForm.controls['street'].value;
    this.studentService.getLatitudeLongitude(street, number, neighborhood, city).subscribe(
      (res)=>{
        let latitude = res.results[0].geometry.lat.toString();
        let longitude = res.results[0].geometry.lng.toString();
        this.studentForm.controls['latitude'].setValue(latitude);
        this.studentForm.controls['longitude'].setValue(longitude);
        this.studentService.create(this.submitAluno()).subscribe(
          (res)=>{
            this.loaderService.hide();
        Swal.fire({
          title: "Sucesso!",
          icon: "success",
          confirmButtonColor: '#FFD54F',
        }).then((result)=>{
          if(result.isConfirmed){
            this.router.navigate(["students"]).then(()=>{
              window.location.reload()
          });
          }
        })
          }
        );
      }
    )
  }

}
