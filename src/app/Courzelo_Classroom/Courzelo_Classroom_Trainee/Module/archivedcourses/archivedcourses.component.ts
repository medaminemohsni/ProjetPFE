import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormationService } from '../../Shared/services/formation.service';
import { Formation } from '../../Shared/entities/Formation';

@Component({
  selector: 'app-archivedcourses',
  templateUrl: './archivedcourses.component.html',
  styleUrls: ['./archivedcourses.component.css']
})
export class ArchivedcoursesComponent implements OnInit {
  formation!:Formation[]
  constructor(private observer: BreakpointObserver,private formationService:FormationService) { }

  ngOnInit(): void {
    this.formationService.getFormationsByIdStudent(3).subscribe(
      data => { this.formation = data;
      
      console.log(this.formation)
      },

      error => { console.log("error"); });

  
  }

}
