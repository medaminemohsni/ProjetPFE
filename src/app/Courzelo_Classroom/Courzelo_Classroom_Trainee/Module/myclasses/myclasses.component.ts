import { Component, OnInit, ViewChild } from '@angular/core';
import { Formation } from '../../Shared/entities/Formation';
import { FormationService } from '../../Shared/services/formation.service';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay } from 'rxjs';
import { Section } from 'src/app/Courzelo_Classroom/Courzelo_Classroom_Trainer/Module/attendees-trainer/attendees-trainer.component';


@Component({
  selector: 'app-myclasses',
  templateUrl: './myclasses.component.html',
  styleUrls: ['./myclasses.component.css']
})
export class MyclassesComponent implements OnInit {
 
  folders: Section[] = [
    {
      name: 'Mohamed Amine Mohsni',
      updated: new Date('1/1/16'),
    },
    
  ];
  notes: Section[] = [
    {
      name: 'Bilel Merhben',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Asma Chebbi',
      updated: new Date('1/18/16'),
    },
  ];

  constructor(private observer: BreakpointObserver) { }
  formation!:Formation[]
  formationDetail!:Formation
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
    ngOnInit(): void {
    }

  }
  