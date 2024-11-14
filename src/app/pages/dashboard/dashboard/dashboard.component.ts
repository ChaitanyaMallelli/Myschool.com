import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storageservice';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private router:Router,
    private _storage : StorageService
      ) { }

      StudentCount = 0;
      EmployeeCount = 0 ;

  ngOnInit(){
    let Students = this._storage.getAllStudents();
    if (Students){
      this.StudentCount = Students.length;
    }
    let Employees = this._storage.getEmployees();
    if (Employees){
      this.EmployeeCount = Employees.length;
    }
    }


  Cardfun(data : string){
    // this.router.navigateByUrl('students');
    if (data ==="Students") {
    this.router.navigate(['/students/allstudents']);
    }
     if (data ==="Employees") {
      this.router.navigate(['/employee/allemployee']);
    }
    // alert('You Basterd') employees/allemployees
  }

}
