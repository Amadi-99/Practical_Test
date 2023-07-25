import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import '../style/ListDepartment.css';


class ListDepartments extends Component {
    state = {
        departments: [],
    };

    componentDidMount() {
        EmployeeService.getDepartments()
            .then((res) => {
                this.setState({ departments: res.data });
            })
            .catch((error) => {
                console.error("Error getting departments:", error);
            });
    }

    render() {
        const { departments } = this.state;

        return (
            <div>
                <h2 className="text-center">Departments List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Department Code</th>
                                <th>Department Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {departments.map((department) => (
                                <tr key={department.departmentCode}>
                                    <td>{department.departmentCode}</td>
                                    <td>{department.departmentName}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListDepartments;
