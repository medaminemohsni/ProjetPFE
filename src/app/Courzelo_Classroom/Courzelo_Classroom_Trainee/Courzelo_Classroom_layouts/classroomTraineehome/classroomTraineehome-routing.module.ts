import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivedcoursesComponent } from '../../Module/archivedcourses/archivedcourses.component';
import { DetailFormationComponent } from '../../Module/detail-formation/detail-formation.component';
import { EspaceFormationComponent } from '../../Module/espace-formation/espace-formation.component';
import { FormationComponent } from '../../Module/formation/formation.component';
import { MyclassesComponent } from '../../Module/myclasses/myclasses.component';
import { ClassroomTraineehomeComponent } from './classroomTraineehome.component';


const routes: Routes = [
  { path: 'courses', component: FormationComponent}, 
  { path: 'detailFormation', component:DetailFormationComponent},
  { path:'sidebar', component: ClassroomTraineehomeComponent,
  
  children: [

  { path:'espaceformation', component:EspaceFormationComponent},
   { path:'archivedcourses', component:ArchivedcoursesComponent},
   { path:'myClasses', component:MyclassesComponent},
  ] }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassroomhomeComponentRoutingModule { }
