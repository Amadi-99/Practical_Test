import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import '../style/EditEmployee.css';

class EditEmployee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            empNo: this.props.match.params.empNo,
            empName: '',
            empAddressLine1: '',
            empAddressLine2: '',
            empAddressLine3: '',
            departmentCode: '',
            dateOfJoin: '',
            dateOfBirth: '',
            basicSalary: 0,
            isActive: true,
        };

        this.updateEmployee = this.updateEmployee.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployeeByEmpNo(this.state.empNo)
            .then((res) => {
                let employee = res.data;
                this.setState({
                    empName: employee.empName,
                    empAddressLine1: employee.empAddressLine1,
                    empAddressLine2: employee.empAddressLine2,
                    empAddressLine3: employee.empAddressLine3,
                    departmentCode: employee.departmentCode,
                    dateOfJoin: employee.dateOfJoin,
                    dateOfBirth: employee.dateOfBirth,
                    basicSalary: employee.basicSalary,
                    isActive: employee.isActive,
                });
            })
            .catch((error) => {
                console.error("Error getting employee data:", error);
            });
    }

    updateEmployee(e) {
        e.preventDefault();
        const employee = {
            empName: this.state.empName,
            empAddressLine1: this.state.empAddressLine1,
            empAddressLine2: this.state.empAddressLine2,
            empAddressLine3: this.state.empAddressLine3,
            departmentCode: this.state.departmentCode,
            dateOfJoin: this.state.dateOfJoin,
            dateOfBirth: this.state.dateOfBirth,
            basicSalary: this.state.basicSalary,
            isActive: this.state.isActive,
        };

        EmployeeService.updateEmployee(employee, this.state.empNo)
            .then((res) => {
                this.props.history.push('/employees');
            })
            .catch((error) => {
                console.error("Error updating employee:", error);
            });
    }

    changeHandler(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    cancel() {
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Employee Number:</label>
                                        <input
                                            placeholder="Employee Number"
                                            name="empNo"
                                            className="form-control"
                                            value={this.state.empNo}
                                            onChange={this.changeHandler}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Employee Name:</label>
                                        <input
                                            placeholder="Employee Name"
                                            name="empName"
                                            className="form-control"
                                            value={this.state.empName}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Address Line 1:</label>
                                        <input
                                            placeholder="Address Line 1"
                                            name="empAddressLine1"
                                            className="form-control"
                                            value={this.state.empAddressLine1}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Address Line 2:</label>
                                        <input
                                            placeholder="Address Line 2"
                                            name="empAddressLine2"
                                            className="form-control"
                                            value={this.state.empAddressLine2}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Address Line 3:</label>
                                        <input
                                            placeholder="Address Line 3"
                                            name="empAddressLine3"
                                            className="form-control"
                                            value={this.state.empAddressLine3}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Department Code:</label>
                                        <input
                                            placeholder="Department Code"
                                            name="departmentCode"
                                            className="form-control"
                                            value={this.state.departmentCode}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Date of Join:</label>
                                        <input
                                            type="datetime-local"
                                            name="dateOfJoin"
                                            className="form-control"
                                            value={this.state.dateOfJoin}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Date of Birth:</label>
                                        <input
                                            type="datetime-local"
                                            name="dateOfBirth"
                                            className="form-control"
                                            value={this.state.dateOfBirth}
                                           
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Basic Salary:</label>
                                        <input
                                            type="number"
                                            name="basicSalary"
                                            className="form-control"
                                            value={this.state.basicSalary}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Is Active:</label>
                                        <input
                                            type="checkbox"
                                            name="isActive"
                                            className="form-control"
                                            checked={this.state.isActive}
                                            onChange={(e) => this.setState({ isActive: e.target.checked })}
                                        />
                                    </div>

                                    <button className="btn btn-success" onClick={this.updateEmployee}>
                                        Update
                                    </button>
                                    <button className="btn btn-danger" onClick={this.cancel} style={{ marginLeft: "10px" }}>
                                        Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditEmployee;
