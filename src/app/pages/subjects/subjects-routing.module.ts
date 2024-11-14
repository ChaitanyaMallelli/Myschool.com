import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsubjectComponent } from './new-subject/newsubject/newsubject.component';
import { ClasssubjectsComponent } from './class-subjects/classsubjects/classsubjects.component';




const routes: Routes = [
  {
    path: '',
    children: [
        {
        path:'newsubjects',
        component:NewsubjectComponent
        },
        {
            path:'classsubjects',
            component:ClasssubjectsComponent
        }

      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule {}
