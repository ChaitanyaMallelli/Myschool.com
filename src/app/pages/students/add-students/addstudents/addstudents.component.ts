import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { studentRegistration } from 'src/app/models/studentRegistration.model';
import { ReloadService } from 'src/app/services/reload.service';
import { StorageService } from 'src/app/services/storageservice';
import { StudentService } from 'src/app/services/studentsertvice';


@Component({
  selector: 'app-addstudents',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './addstudents.component.html',
  styleUrl: './addstudents.component.scss'
})
export class AddstudentsComponent {

   _studentReg: studentRegistration[] = [];


  
  _studentForm = {
    StudentName: '',
    LastRegNumber: '',
    SelectedClass: '',
    AdmissionDate: '',
    Discount: '',
    MobileNumber: '',
    Dob: '',
    StudentNationalID: '',
    IsOrphan: '',
    Gender: '',
    Cast: '',
    Osc: '',
    Identity: '',
    PreviousSchool: '',
    Religion: '',
    BloodGroup: '',
    PreviousRollNumber: '',
    Family: '',
    Disease: '',
    Notes: '',
    Siblings: '',
    Address: '',
    FatherName: '',
    FatherNationalID: '',
    FatherOccupation: '',
    FatherEducation: '',
    FatherMobileNumber: '',
    FatherProfession: '',
    FatherIncome: '',
    MotherName: '',
    MotherNationalID: '',
    MotherOccupation: '',
    MotherEducation: '',
    MotherMobileNumber: '',
    MotherProfession: '',
    MotherIncome: '',
    id: ''
  };

  editStudent: any;

  constructor(private fb: FormBuilder,
    private _storage: StorageService,
    private _reload: ReloadService,
    private _studentService: StudentService

  ) { }

  ngOnInit() {

    this.editStudent = this._studentService.getStudentData();

    if (this.editStudent) {      
      this._studentForm = {
        StudentName: this.editStudent.StudentName,
        LastRegNumber: this.editStudent.LastRegNumber,
        SelectedClass: this.editStudent.SelectedClass,
        AdmissionDate: this.editStudent.AdmissionDate,
        Discount: this.editStudent.Discount,
        MobileNumber: this.editStudent.MobileNumber,
        Dob: this.editStudent.Dob,
        StudentNationalID: this.editStudent.StudentNationalID,
        IsOrphan: this.editStudent.IsOrphan,
        Gender: this.editStudent.Gender,
        Cast: this.editStudent.Cast,
        Osc: this.editStudent.Osc,
        Identity: this.editStudent.Identity,
        PreviousSchool: this.editStudent.PreviousSchool,
        Religion: this.editStudent.Religion,
        BloodGroup: this.editStudent.BloodGroup,
        PreviousRollNumber: this.editStudent.PreviousRollNumber,
        Family: this.editStudent.Family,
        Disease: this.editStudent.Disease,
        Notes: this.editStudent.Notes,
        Siblings: this.editStudent.Siblings,
        Address: this.editStudent.Address,
        FatherName: this.editStudent.FatherName,
        FatherNationalID: this.editStudent.FatherNationalID,
        FatherOccupation: this.editStudent.FatherOccupation,
        FatherEducation: this.editStudent.FatherEducation,
        FatherMobileNumber: this.editStudent.FatherMobileNumber,
        FatherProfession: this.editStudent.FatherProfession,
        FatherIncome: this.editStudent.FatherIncome,
        MotherName: this.editStudent.MotherName,
        MotherNationalID: this.editStudent.MotherNationalID,
        MotherOccupation: this.editStudent.MotherOccupation,
        MotherEducation: this.editStudent.MotherEducation,
        MotherMobileNumber: this.editStudent.MotherMobileNumber,
        MotherProfession: this.editStudent.MotherProfession,
        MotherIncome: this.editStudent.MotherIncome,
        id: this.editStudent.id
      }
    }
    this._studentService.removeStudentData();

  }

  onSubmit() {

    if (this._studentForm.id) {

       this._storage.UpdateStudentByID(JSON.stringify(this._studentForm))
      this.ClearStudents()
      alert("Student Successfully Updated")

    } else {

      this._studentForm.id = crypto.randomUUID();
      this._storage.AddStudent(JSON.stringify(this._studentForm))
      this.ClearStudents()
      alert("Student Successfully Added")
    }
    this._reload.reloadPage()

  }

  ClearStudents() {
    this._studentForm = {
      id: '',
      StudentName: '',
      LastRegNumber: '',
      SelectedClass: '',
      AdmissionDate: '',
      Discount: '',
      MobileNumber: '',
      Dob: '',
      StudentNationalID: '',
      IsOrphan: '',
      Gender: '',
      Cast: '',
      Osc: '',
      Identity: '',
      PreviousSchool: '',
      Religion: '',
      BloodGroup: '',
      PreviousRollNumber: '',
      Family: '',
      Disease: '',
      Notes: '',
      Siblings: '',
      Address: '',
      FatherName: '',
      FatherNationalID: '',
      FatherOccupation: '',
      FatherEducation: '',
      FatherMobileNumber: '',
      FatherProfession: '',
      FatherIncome: '',
      MotherName: '',
      MotherNationalID: '',
      MotherOccupation: '',
      MotherEducation: '',
      MotherMobileNumber: '',
      MotherProfession: '',
      MotherIncome: ''
    };

  }

}
