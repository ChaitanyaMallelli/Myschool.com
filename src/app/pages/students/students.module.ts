import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './students-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  // AddemployeeComponent
  ],
  imports: [CommonModule,StudentRoutingModule,FormsModule,ReactiveFormsModule]
})
export class StudentModule {}
