const employees = [
    {id: 1,name: 'John Doe',age: 30,department: 'IT',salary: 50000},
    {id: 2,name: 'Alice Smith',age: 28,department: 'HR', salary: 45000},
    {id: 3,name: 'Bob Johnson',age: 35,department: 'Finance', salary: 60000}
];
//Function to display all employees
function displayEmployees(){
    const totalEmployees = employees.map((employee, index) => '<p>'+employee.id+' : '+employee.name+' : '+employee.age+' : '+employee.department+' : '+employee.salary+'</p>').join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}
//to calculate total salaries
function calculateTotalSalaries(){
    const totalSalaries= employees.reduce((acc,employee) => acc+employee.salary,0);
    alert('Total Salaries: '+totalSalaries);
}
//to display HR employees
function displayHREmployees(){
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee,index) => '<p>'+employee.id+' : '+employee.name+' : '+employee.age+' : '+employee.department+' : '+employee.salary+'</p>').join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}
//to find employee by their id
var employeeId = 2;
function findEmployeeById(employeeId){
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if(foundEmployee){
        document.getElementById('employeesDetails').innerHTML = '<p>'+foundEmployee.id+' : '+foundEmployee.name+' : '+foundEmployee.age+' : '+foundEmployee.department+' : '+foundEmployee.salary+'</p>';
    }else{
        document.getElementById('employeesDetails').innerHTML = 'no employee details were found for the given id';
    }
}