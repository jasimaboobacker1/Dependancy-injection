import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {


  public employees = [
    { id: 1, name: 'Alice', age: 30, position: 'Manager', salary: 80000 },
    { id: 2, name: 'Bob', age: 25, position: 'Developer', salary: 60000 },
    { id: 3, name: 'Charlie', age: 35, position: 'Designer', salary: 70000 },
    { id: 4, name: 'David', age: 28, position: 'Developer', salary: 65000 },
    { id: 5, name: 'Eve', age: 33, position: 'Manager', salary: 75000 },
    { id: 6, name: 'Frank', age: 40, position: 'Director', salary: 90000 },
    { id: 7, name: 'Grace', age: 27, position: 'Developer', salary: 62000 },
    { id: 8, name: 'Henry', age: 32, position: 'Designer', salary: 72000 },
    { id: 9, name: 'Ivy', age: 29, position: 'Developer', salary: 63000 },
    { id: 10, name: 'Jack', age: 34, position: 'Manager', salary: 78000 }
];



  getDetails(){
    return this.employees;
  }

  constructor() { }
}
