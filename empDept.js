var employee = /** @class */ (function () {
    function employee(empId, empName, deptId, salary) {
        this.empId = empId;
        this.empName = empName;
        this.deptId = deptId;
        this.salary = salary;
    }
    return employee;
}());
var company = /** @class */ (function () {
    function company() {
        this.employees = [];
    }
    company.prototype.addEmployee = function (newEmployee) {
        this.employees.push(newEmployee);
    };
    company.prototype.empByDept = function (depId) {
        return this.employees.filter(function (emp) { return emp.deptId == depId; });
    };
    company.prototype.getTotalSalariesByDeptId = function (departmentId) {
        var employeesInDept = this.empByDept(departmentId);
        return employeesInDept.reduce(function (total, emp) { return total + emp.salary; }, 0);
    };
    return company;
}());
var comp = new company();
comp.addEmployee(new employee(1, "Alice", 101, 50000));
comp.addEmployee(new employee(2, "Bob", 102, 60000));
comp.addEmployee(new employee(3, "Charlie", 101, 55000));
console.log(comp.empByDept(101));
var totalSalaries = comp.getTotalSalariesByDeptId(101);
console.log("Total salaries under department : ".concat(totalSalaries));
