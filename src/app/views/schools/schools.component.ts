import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss']
})
export class SchoolsComponent implements OnInit {

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.getSchools();
  }

  schools: any[] = []

  displayedColumns: string[] = ['name', 'cidade', 'acao'];
  dataSource: any;

  getSchools(){
    this.schoolService.getAll().subscribe(
      (res)=>{
        for(let school of res){
          this.schools.push(school)
        }
        this.dataSource = new MatTableDataSource(this.schools);
        console.log(res[0])
      }
    )
  }

}
