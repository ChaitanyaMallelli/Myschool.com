import { Injectable } from '@angular/core';
import { studentRegistration } from '../models/studentRegistration.model';



@Injectable({
    providedIn: 'root'
})

export class StorageService {

    constructor() { }

    //Students
    AddStudent(data: string) {
        let Users: any[] = [];
        const Userdata = localStorage.getItem('Users')

        if (Userdata) {
            Users = JSON.parse(Userdata)
            Users = [data, ...Users]
        }
        else {
            Users = [data]
        }
        localStorage.setItem('Users', JSON.stringify(Users))
    }

    UpdateStudentByID(data: string) {
        try {
            let Students: any[] = [];
            let allStudents: any[] = [];
            let Students_updated: any[] = [];
            const Userdata = localStorage.getItem('Users');
            Students = Userdata ? JSON.parse(Userdata) : [];

            Students.forEach((value) => {
                const abc = JSON.parse(value)
                allStudents = [abc, ...allStudents]
            })
            let Updatestudent: studentRegistration = JSON.parse(data);
            const index = allStudents.findIndex((allStudents) => allStudents.id === Updatestudent.id);
            if (index !== -1) {
                allStudents[index] = Object.assign(allStudents[index], Updatestudent);

                allStudents.forEach(e => {
                    const abc = JSON.stringify(e);
                    Students_updated = [abc, ...Students_updated]
                });

                localStorage.setItem('Users', JSON.stringify((Students_updated)));
            } else {
                console.error('User not found!');
            }

        } catch (error) {
            console.error('Error parsing updated user string:', error);
        }

    }

    getAllStudents(): studentRegistration[] {
        const usersJson = localStorage.getItem('Users');
        if (usersJson) {
            try {
                return JSON.parse(usersJson);
            } catch (error) {
                console.error('Error parsing users from local storage', error);
                return []; // Return an empty array if parsing fails
            }
        }
        return []; // Return an empty array if no users found
    }


    DeleteStudent(studentid: string) {
        try {
            let Students: any[] = [];
            let allStudents: any[] = [];
            let Students_updated: any[] = [];
            const Userdata = localStorage.getItem('Users');
            Students = Userdata ? JSON.parse(Userdata) : [];

            Students.forEach((value) => {
                const abc = JSON.parse(value);
                allStudents = [abc, ...allStudents];
            })

            allStudents = allStudents.filter(user => user.id !== studentid);
            allStudents.forEach((e) => {
                const abc = JSON.stringify(e);
                Students_updated = [abc, ...Students_updated];
            })

            localStorage.setItem('Users', JSON.stringify(Students_updated));

        } catch (error) {
            console.error('Error parsing updated user string:', error);
        }

    }

    // Employees
    AddEmployee(data: string) {
        let employee: any[] = [];
        const EmployeeData = localStorage.getItem('Employee')

        if (EmployeeData) {
            employee = JSON.parse(EmployeeData)
            employee = [data, ...employee]
        }
        else {
            employee = [data];
        }
        localStorage.setItem('Employee', JSON.stringify(employee))


    }

    getEmployees() {

        const EmployeeData = localStorage.getItem('Employee');

        if (EmployeeData) {
            return JSON.parse(EmployeeData)
        }
        else {
            return [];
        }


    }

        
    UpdateEmployeeByID(data: string) {
        try {
            let Employee: any[] = [];
            let AllEmployees: any[] = [];
            let Employee_updated: any[] = [];
            const Emp_data = localStorage.getItem('Employee');
            Employee = Emp_data ? JSON.parse(Emp_data) : [];

            Employee.forEach((value) => {
                const abc = JSON.parse(value)
                AllEmployees = [abc, ...AllEmployees]
            })
            let Updatestudent = JSON.parse(data);
            const index = AllEmployees.findIndex((AllEmployees) => AllEmployees.id === Updatestudent.id);
            if (index !== -1) {
                AllEmployees[index] = Object.assign(AllEmployees[index], Updatestudent);

                AllEmployees.forEach(e => {
                    const abc = JSON.stringify(e);
                    Employee_updated = [abc, ...Employee_updated]
                });

                localStorage.setItem('Employee', JSON.stringify((Employee_updated)));
            } else {
                console.error('User not found!');
            }

        } catch (error) {
            console.error('Error parsing updated user string:', error);
        }

    }


    DeleteEmployee(employeeid: string) {
        try {
            let Employees : any[] = [];
            let allEmployees: any[] = [];
            let Employee_updated: any[] = [];
            const empData = localStorage.getItem('Employee');
            Employees = empData ? JSON.parse(empData) : [];

            Employees.forEach((value) => {
                const abc = JSON.parse(value);
                // console.log
                allEmployees = [abc, ...allEmployees];
            })

            allEmployees = allEmployees.filter(e => e.EmployeeID !== employeeid);
            allEmployees.forEach((e) => {
                const abc = JSON.stringify(e);
                Employee_updated = [abc, ...Employee_updated];
            })

            localStorage.setItem('Employee', JSON.stringify(Employee_updated));

        } catch (error) {
            console.error('Error parsing updated user string:', error);
        }

    }

     
}