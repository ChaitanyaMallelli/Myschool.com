import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './add-employee/addemployee/addemployee.component';
import { AllemployeeComponent } from './all-employee/allemployee/allemployee.component';


const routes: Routes = [
  {
    path: '',
    children: [
        {
        path:'allemployee',
        component:AllemployeeComponent
        },
        {
            path:'addemployee',
            component:AddemployeeComponent
        }

      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {}
