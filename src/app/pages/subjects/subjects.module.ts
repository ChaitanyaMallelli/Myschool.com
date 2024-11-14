import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubjectsRoutingModule } from './subjects-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [CommonModule,FormsModule,ReactiveFormsModule,SubjectsRoutingModule]
})
export class SubjectModule {}
