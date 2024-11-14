import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private studentData: any;

  setStudentData(data: any) {
    this.studentData = data;
  }

  getStudentData() {
    return this.studentData;
  }

  removeStudentData(){
    this.studentData = null;
  }
}
