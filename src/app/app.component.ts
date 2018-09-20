import { Component } from '@angular/core';

import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  employeeArray: Employee[] = [
    {id: 1, name: 'Zac', country: 'Argentina'},
    {id: 2, name: 'Nara', country: 'Argentina'},
    {id: 3, name: 'Elías', country: 'Argentina'}
  ];

  selectedEmployee: Employee = new Employee();

  addOrEdit(){
    if(this.selectedEmployee.id === 0){
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }
    this.selectedEmployee = new Employee();
  }
  openForEdition(employee: Employee){
    this.selectedEmployee = employee;
  }
  delete(){
    if(confirm('¿Está seguro que desea eliminarlo?')){
      this.employeeArray = this.employeeArray.filter(e => e != this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }
  }

}
