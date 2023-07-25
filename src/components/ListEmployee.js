import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import '../style/ListEmployee.css';

class ListEmployee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: [],
            searchQuery: '',
        };

        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    deleteEmployee(empNo) {
        EmployeeService.deleteEmployee(empNo)
            .then((res) => {
                this.setState({
                    employees: this.state.employees.filter((employee) => employee.empNo !== empNo),
                });
            })
            .catch((error) => {
                console.error("Error deleting employee:", error);
            });
    }

    viewEmployee(empNo) {
        this.props.history.push(`/view-employee/${empNo}`);
    }

    editEmployee(empNo) {
        this.props.history.push(`/edit-employee/${empNo}`);
    }

    componentDidMount() {
        EmployeeService.getAllEmployees()
            .then((res) => {
                this.setState({ employees: res.data });
            })
            .catch((error) => {
                console.error("Error getting employees:", error);
            });
    }

    addEmployee() {
        this.props.history.push('/add-employee/_add');
    }

    handleSearchChange(event) {
        this.setState({ searchQuery: event.target.value });
    }

    render() {
        const filteredEmployees = this.state.employees.filter((employee) => {
            const { empName, empAddressLine1, empAddressLine2, empAddressLine3 } = employee;
            const searchQuery = this.state.searchQuery.toLowerCase();
            return (
                empName.toLowerCase().includes(searchQuery) ||
                empAddressLine1.toLowerCase().includes(searchQuery) ||
                empAddressLine2.toLowerCase().includes(searchQuery) ||
                empAddressLine3.toLowerCase().includes(searchQuery)
            );
        });
        return (
            <div>
                <h2 className="text-center">Employees Details</h2>
                <div className="row center-buttons">
                    <Link to={`/add-employee/_add`} className="btn btn-primary ml-2">
                        Add Employee
                    </Link>
                    <Link to={`/edit-employee/:empNo`} className="btn btn-primary ml-2">
                        Edit Employee
                    </Link>
                    <Link to={`/view-employee/:empNo`} className="btn btn-primary ml-2">
                        View Employee
                    </Link>
                    <Link to={`/departments`} className="btn btn-primary ml-2">
                        Departments
                    </Link>

                </div>
                <br />
                <div className="row">
                    <input
                        type="text"
                        placeholder="Search Employee"
                        value={this.state.searchQuery}
                        onChange={this.handleSearchChange}
                        className="form-control"
                    />
                </div>
                <br />
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Employee Number</th>
                                <th> Employee Name</th>
                                <th> Address Line 1</th>
                                <th> Address Line 2</th>
                                <th> Address Line 3</th>
                                <th> Department Code</th>
                                <th> Date of Join</th>
                                <th> Date of Birth</th>
                                <th> Basic Salary</th>
                                <th> Is Active</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredEmployees.map((employee) => (
                                <tr key={employee.empNo}>
                                    <td> {employee.empNo} </td>
                                    <td> {employee.empName} </td>
                                    <td> {employee.empAddressLine1} </td>
                                    <td> {employee.empAddressLine2 || ''} </td>
                                    <td> {employee.empAddressLine3 || ''} </td>
                                    <td> {employee.departmentCode} </td>
                                    <td> {employee.dateOfJoin} </td>
                                    <td> {employee.dateOfBirth} </td>
                                    <td> {employee.basicSalary} </td>
                                    <td> {employee.isActive ? 'Yes' : 'No'} </td>
                                    <td>
                                        <button onClick={() => this.editEmployee(employee.empNo)} className="btn btn-info">
                                            Update
                                        </button>
                                        <button
                                            style={{ marginLeft: "10px" }}
                                            onClick={() => this.deleteEmployee(employee.empNo)}
                                            className="btn btn-danger"
                                        >
                                            Delete
                                        </button>
                                        <button
                                            style={{ marginLeft: "10px" }}
                                            onClick={() => this.viewEmployee(employee.empNo)}
                                            className="btn btn-info"
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployee;
