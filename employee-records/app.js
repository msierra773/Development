var employees = [];

function Employee(name, JobTitle, salary) {
  this.Name = name;
  this.JobTitle = JobTitle;
  this.Salary = salary;
  this.Status = "full time";
  printEmployeeForm = function () {
    console.log("Name: " + this.name + "Job Title: " + this.JobTitle + "Salary:" + this.Salary);
  };
}

var newHire = new Employee("mike", "mechanic", 65000);

var newHire2 = new Employee("Jenny", "mechanic", 65000)

employees.push(newHire, newHire2);
console.log(employees);

console.log(newHire);

console.log(newHire2);
