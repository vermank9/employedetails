import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { EmployeeProviderService } from '../employee-provider.service';
import { Employee } from '../employee.model';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: [
        './employee-list.component.css'
    ]
})
export class EmployeeListComponent implements OnInit {
    public employeeList: Array<Employee>;
    public subscription: Subscription;

    constructor(private employeeProviderService: EmployeeProviderService) {}

    ngOnInit() {
        this.employeeList = this.employeeProviderService.getEmployeeList();

        this.subscription = this.employeeProviderService.employeeListChanged.subscribe((employeeList: Array<Employee>) => {
            this.employeeList = employeeList;
        });
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
}
