import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Schedules', url: '/pages/schedules', icon: 'calendar' },

    { title: 'Shifts', url: '/pages/shifts', icon: 'document' },
    
    { title: 'People', url: '/pages/people', icon: 'people' },

    
  ];
  constructor() {}
}
