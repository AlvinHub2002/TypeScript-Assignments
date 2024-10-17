var Employee = /** @class */ (function () {
    function Employee(employeeId, employeeName, employeeAge) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.employeeAge = employeeAge;
    }
    return Employee;
}());
// Using a Set to keep track of unique employee IDs
var uniqueEmployeeIds = new Set();
function addEmployee(employeeId, employeeName, employeeAge) {
    if (uniqueEmployeeIds.has(employeeId)) {
        console.log("Employee ID ".concat(employeeId, " already exists. Employee not added."));
    }
    else {
        var newEmployee = new Employee(employeeId, employeeName, employeeAge);
        uniqueEmployeeIds.add(employeeId);
        console.log(newEmployee);
    }
}
// Example usage
addEmployee(100, "Alvin", 22); // Adds the employee
addEmployee(100, "John", 30); // Will not add this employee, ID already exists
addEmployee(101, "Jane", 25); // Adds this employee
