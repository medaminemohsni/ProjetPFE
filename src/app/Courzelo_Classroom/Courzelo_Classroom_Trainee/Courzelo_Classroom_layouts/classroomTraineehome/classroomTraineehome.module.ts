import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  SharedClassroomTraineeModule } from '../../Shared/shared-classroom-Trainee.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {  MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'; 
import { FormationComponent } from '../../Module/formation/formation.component';
import { DetailFormationComponent } from '../../Module/detail-formation/detail-formation.component';
import { MyclassesComponent } from '../../Module/myclasses/myclasses.component';
import { EspaceFormationComponent } from '../../Module/espace-formation/espace-formation.component';
import { FormulaireFormationComponent } from '../../Module/formulaire-formation/formulaire-formation.component';
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import { MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list'; 
import { ClassroomTraineehomeComponent } from './classroomTraineehome.component';
import { ClassroomhomeComponentRoutingModule } from './classroomTraineehome-routing.module';
import { BrowserModule } from '@angular/platform-browser'
import { ArchivedcoursesComponent } from '../../Module/archivedcourses/archivedcourses.component';


@NgModule({
  declarations: [
    ClassroomTraineehomeComponent,
    FormationComponent,
    DetailFormationComponent,
    MyclassesComponent,
    EspaceFormationComponent,
    FormulaireFormationComponent,
    ArchivedcoursesComponent
  ],
  imports: [
    CommonModule,
    ClassroomhomeComponentRoutingModule,
    SharedClassroomTraineeModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatTabsModule,
    MatExpansionModule,
   MatIconModule,
   MatListModule,
  BrowserModule
  
    
  
    

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports:[
    ClassroomTraineehomeComponent
  ]
})
export class ClassroomTraineehomeModule { }
