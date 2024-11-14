import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';


@NgModule({
  declarations: [
// EmployeeComponent
  ],
  imports: [CommonModule,FormsModule,ReactiveFormsModule,EmployeeRoutingModule]
})
export class EmployeeModule {}
