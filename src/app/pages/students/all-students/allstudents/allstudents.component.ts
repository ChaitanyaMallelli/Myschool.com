import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storageservice';
import { ReloadService } from 'src/app/services/reload.service';
import { StudentService } from 'src/app/services/studentsertvice';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-allstudents',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './allstudents.component.html',
  styleUrl: './allstudents.component.scss'
})
export class AllstudentsComponent {

  Users:any[]=[];
 

  constructor(
      private _store:StorageService
            ,private router:Router
             ,private _studentService:StudentService
            ,private _reload:ReloadService
  ) { }


  ngOnInit(){
    this.Users=this._store.getAllStudents()
    let _students:any[]=[];  
   
    this.Users.forEach( (value)=>{
     const abc=JSON.parse(value);
      _students  = [abc,..._students]; 
    })
    this.Users=_students

  }

  onEdit(user:any){
    let editStudObj =user;
    this._studentService.setStudentData(editStudObj);
    this.router.navigate(['/students/addstudents']);
  }

  onDelete(id:string){

     this._store.DeleteStudent(id);
     this._reload.reloadPage();
   

  }

}
