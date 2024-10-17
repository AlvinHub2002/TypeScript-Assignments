class employee{
    empId : number;
    empName : string;
    deptId : number;
    salary : number;

    constructor(empId : number, empName : string, deptId:number,salary:number){
        this.empId = empId;
        this.empName= empName;
        this.deptId = deptId;
        this.salary = salary;
    }
}

class company{
    employees : employee[]=[];

    addEmployee(newEmployee:employee):void{
        this.employees.push(newEmployee);
    }

    empByDept(depId : number):employee []{
        return this.employees.filter(emp=>emp.deptId==depId);
    }

    getTotalSalariesByDeptId(departmentId: number): number {
        const employeesInDept = this.empByDept(departmentId);
        return employeesInDept.reduce((total, emp) => total + emp.salary, 0);
    }

}


const comp = new company();

comp.addEmployee(new employee(1, "Alice", 101, 50000));
comp.addEmployee(new employee(2, "Bob", 102, 60000));
comp.addEmployee(new employee(3, "Charlie", 101, 55000));

console.log(comp.empByDept(101));

const totalSalaries = comp.getTotalSalariesByDeptId(101);
console.log(`Total salaries under department : ${totalSalaries}`);
