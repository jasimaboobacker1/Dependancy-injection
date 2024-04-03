import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../Services/details.service';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  imports:[RouterOutlet,FormsModule,CommonModule,CurrencyPipe,UpperCasePipe],
  styleUrls: ['./employeedetails.component.css'],
  standalone:true
})
export class EmployeedetailsComponent implements OnInit {

  employees: any[] = [];

  constructor(private detailsService: DetailsService) {}

  ngOnInit(): void {
    this.employees = this.detailsService.getDetails();
  }

}
