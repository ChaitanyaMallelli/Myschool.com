import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ReloadService } from 'src/app/services/reload.service';
import { StorageService } from 'src/app/services/storageservice';
import { StudentService } from 'src/app/services/studentsertvice';

@Component({
  selector: 'app-allemployee',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './allemployee.component.html',
  styleUrl: './allemployee.component.scss'
})
export class AllemployeeComponent {

  employees: any[] = [];


  constructor(private _store:StorageService
       ,private _studentService:StudentService
       ,private _router:Router
       ,private _reload:ReloadService
      //  ,private _store:StorageService
  ){

  }


  ngOnInit(){
  // this._store.getEmployees().subscribe((data: any[]) => {
  let employeeData:any[]=[];
  this.employees = this._store.getEmployees();

  this.employees.forEach((value)=>{
    const abc=JSON.parse(value);
    employeeData=[abc,...employeeData]
  })

  this.employees=employeeData;

}

onEdit(employee : string){

  this._studentService.setStudentData(employee);
  this._router.navigate(['/employee/addemployee'])
}

onDelete(id: string){
  this._store.DeleteEmployee(id);
  this._reload.reloadPage();
}
}
