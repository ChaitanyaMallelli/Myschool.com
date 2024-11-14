import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageService } from 'src/app/services/storageservice';
import { StudentService } from 'src/app/services/studentsertvice';

@Component({
  selector: 'app-addemployee',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './addemployee.component.html',
  styleUrl: './addemployee.component.scss'
})
export class AddemployeeComponent {

  constructor(private _store: StorageService, private _studentservice: StudentService) { }


  _editEmployee : any;
  _employeeForm = {
    EmployeeID: '',
    EmployeeName: '',
    EmployeeMobileNumber: '',
    EmployeeRole: '',
    EmployeeJoiningDate: '',
    EmployeeSalary: '',
    EmployeeHusband: '',
    EmployeeGender: '',
    EmployeeExperience: '',
    EmployeeNationalID: '',
    EmployeeReligion: '',
    EmployeeEmail: '',
    EmployeeEducation: '',
    EmployeeBloodGroup: '',
    EmployeeDob: '',
    EmployeeAddress: ''
  }


  ngOnInit() {

    this._editEmployee = this._studentservice.getStudentData();

    if (this._editEmployee) {
      this._employeeForm = {
        EmployeeID: this._editEmployee.EmployeeID,
        EmployeeName: this._editEmployee.EmployeeName,
        EmployeeMobileNumber: this._editEmployee.EmployeeMobileNumber,
        EmployeeRole: this._editEmployee.EmployeeRole,
        EmployeeJoiningDate: this._editEmployee.EmployeeJoiningDate,
        EmployeeSalary: this._editEmployee.EmployeeSalary,
        EmployeeHusband: this._editEmployee.EmployeeHusband,
        EmployeeGender: this._editEmployee.EmployeeGender,
        EmployeeExperience: this._editEmployee.EmployeeExperience,
        EmployeeNationalID: this._editEmployee.EmployeeNationalID,
        EmployeeReligion: this._editEmployee.EmployeeReligion,
        EmployeeEmail: this._editEmployee.EmployeeEmail,
        EmployeeEducation: this._editEmployee.EmployeeEducation,
        EmployeeBloodGroup:this._editEmployee.EmployeeBloodGroup,
        EmployeeDob:this._editEmployee.EmployeeDob,
        EmployeeAddress: this._editEmployee.EmployeeAddress
      }
    }

    this._studentservice.removeStudentData()

  }


  onSubmit() {

    if (this._employeeForm.EmployeeID) {
      this._store.UpdateEmployeeByID(JSON.stringify(this._employeeForm))
      alert('Employee Updated Successfully')
    }
    else {
      this._employeeForm.EmployeeID = crypto.randomUUID();
      this._store.AddEmployee(JSON.stringify(this._employeeForm))
      alert('Employee Added Successfully')
    }
    this.clearEmployee()

  }


  clearEmployee() {
    this._employeeForm = {
      EmployeeID: '',
      EmployeeName: '',
      EmployeeMobileNumber: '',
      EmployeeRole: '',
      EmployeeJoiningDate: '',
      EmployeeSalary: '',
      EmployeeHusband: '',
      EmployeeGender: '',
      EmployeeExperience: '',
      EmployeeNationalID: '',
      EmployeeReligion: '',
      EmployeeEmail: '',
      EmployeeEducation: '',
      EmployeeBloodGroup: '',
      EmployeeDob: '',
      EmployeeAddress: ''
    }



  }
}
