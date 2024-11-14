import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllstudentsComponent } from './all-students/allstudents/allstudents.component';
import { AddstudentsComponent } from './add-students/addstudents/addstudents.component';

const routes: Routes = [
  {
    path: '',
    children: [
        {
        path:'allstudents',
        component:AllstudentsComponent
        },
        {
            path:'addstudents',
            component:AddstudentsComponent
        }

      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {}
