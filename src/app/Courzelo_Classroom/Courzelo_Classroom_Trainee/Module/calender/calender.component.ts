import { Component, OnInit } from '@angular/core';

import { CalendarDateFormatter, CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { Formation } from '../../Shared/entities/Formation';
import { Subject } from 'rxjs';
import { FormationService } from '../../Shared/services/formation.service';
import { addHours, endOfDay, isSameDay, isSameMonth, startOfDay } from 'date-fns';
import { NbWindowService } from '@nebular/theme';
import { FormationComponent } from '../formation/formation.component';
const colors: any = {
  red: { 
    primary: "#ad2121", 
    secondary: "#FAE3E3" 
  },
  blue: { 
    primary: "#1e90ff", 
    secondary: "#D1E8FF" 
  },
  yellow: { 
    primary: "#e3bc08", 
    secondary: "#FDF1BA" 
  }
};

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],
  providers: [
    {
      provide: CalendarDateFormatter,
     
    }
  ]
})
export class CalenderComponent implements OnInit {

 
  view: CalendarView = CalendarView.Month;
  events=[];
  CalendarView = CalendarView;
 
  event!:CalendarEvent;

  viewDate: Date = new Date();

  modalData!: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
  
      }
    }
    
  ];

  refresh: Subject<any> = new Subject();

 
  activeDayIsOpen: boolean = true;

  constructor(private windowService: NbWindowService,
  private formationService:FormationService) {}
  ngOnInit(){
    
    this.formationService.getAllFormations().subscribe(
      data => {

      data.forEach(element=>{
        this.event =
        {
          start: addHours(startOfDay(new Date(element.date)), 4),
           end:addHours( endOfDay(new Date(element.date)), 17),
          title:",kkkk",
          color: colors.red,
          actions: this.actions,
          resizable: {
            beforeStart: true,
            afterEnd: true
          },
          draggable: true
        };
         //this.events.push(this.event)
      

   
  })
});
  }


  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
   }

  handleEvent(action: string, event: CalendarEvent): void {
   
    
    this.windowService.open(FormationComponent, {title: "Afficher"});
  
  }

  
  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
 
}
