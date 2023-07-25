import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import '../style/ViewEmployee.css';

class ViewEmployee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            empNo: this.props.match.params.empNo,
            employee: {},
        };
    }

    componentDidMount() {
        EmployeeService.getEmployeeByEmpNo(this.state.empNo)
            .then((res) => {
                this.setState({ employee: res.data });
            })
            .catch((error) => {
                console.error("Error getting employee data:", error);
            });
    }

    render() {
        const { employee } = this.state;
        return (
            <div>
                <br />
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Employee Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Employee Number:</label>
                            <div>{employee.empNo}</div>
                        </div>
                        <div className="row">
                            <label>Employee Name:</label>
                            <div>{employee.empName}</div>
                        </div>
                        <div className="row">
                            <label>Address Line 1:</label>
                            <div>{employee.empAddressLine1}</div>
                        </div>
                        <div className="row">
                            <label>Address Line 2:</label>
                            <div>{employee.empAddressLine2}</div>
                        </div>
                        <div className="row">
                            <label>Address Line 3:</label>
                            <div>{employee.empAddressLine3}</div>
                        </div>
                        <div className="row">
                            <label>Department Code:</label>
                            <div>{employee.departmentCode}</div>
                        </div>
                        <div className="row">
                            <label>Date of Join:</label>
                            <div>{employee.dateOfJoin}</div>
                        </div>
                        <div className="row">
                            <label>Date of Birth:</label>
                            <div>{employee.dateOfBirth}</div>
                        </div>
                        <div className="row">
                            <label>Basic Salary:</label>
                            <div>{employee.basicSalary}</div>
                        </div>
                        <div className="row">
                            <label>Is Active:</label>
                            <div>{employee.isActive ? 'Yes' : 'No'}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployee;
