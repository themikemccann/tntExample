import Employee from './Employee';

class ApplicationState
{
    constructor() 
    {
        this.Employees = [];
    }

    public Employees:Employee[];

    public AddEmployee(newEmployee:Employee)
    {
        this.Employees = this.Employees.concat(newEmployee);
    }

    public IncreasePay(index:number)
    {
        this.Employees[index].pay += 5000;
    }

    public DecreasePay(index:number)
    {
        this.Employees[index].pay -= 5000;
    }
}

export default ApplicationState;