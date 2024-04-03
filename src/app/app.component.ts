import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EmployeedetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task';
}
