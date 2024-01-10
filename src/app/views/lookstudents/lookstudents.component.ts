import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/interfaces/student';
import { SchoolService } from 'src/app/services/school.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-lookstudents',
  templateUrl: './lookstudents.component.html',
  styleUrls: ['./lookstudents.component.scss']
})
export class LookstudentsComponent implements OnInit {

  constructor(private studentService: StudentService, private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.getStudents()
  }
   students: any[] = []
   schools: any[] = []
   displayedColumns: string[] = ['name', 'escola'];

   getStudents(){
    this.studentService.getAll().subscribe(
      (res)=>{
        this.students = res;
        for(let student of this.students){
          this.captureSchoolOfStudent(student.escola_id)
        }
      }
    )
   }

   captureSchoolOfStudent(idSchool: any){
    this.schoolService.getOne(idSchool).subscribe((res)=> {
      console.warn(res)
      this.schools.push(res.data)
    })
   }

  
   

   abrirNoWaze(lat: any, long: any){
    const wazeLink = `waze://?ll=${lat},${long}`;
    window.location.href = wazeLink;
   }
  

  
}
