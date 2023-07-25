import axios from 'axios';

const API_BASE_URL = "http://examination.24x7retail.com/api/v1.0";
const API_KEY = "?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf";

class EmployeeService {
    getDepartments(){
        return axios.get(`${API_BASE_URL}/Departments${API_KEY}`);
    }

    getEmployeeByEmpNo(empNo){
        return axios.get(`${API_BASE_URL}/Employee/${empNo}${API_KEY}`);
    }

    deleteEmployeeByEmpNo(empNo){
        return axios.delete(`${API_BASE_URL}/Employee/${empNo}${API_KEY}`);
    }

    getAllEmployees(){
        return axios.get(`${API_BASE_URL}/Employees${API_KEY}`);
    }

    createEmployee(employee){
        const data = {
            empNo: employee.empNo,
            empName: employee.empName,
            empAddressLine1: employee.empAddressLine1,
            empAddressLine2: employee.empAddressLine2,
            empAddressLine3: employee.empAddressLine3,
            departmentCode: employee.departmentCode,
            dateOfJoin: employee.dateOfJoin,
            dateOfBirth: employee.dateOfBirth,
            basicSalary: employee.basicSalary,
            isActive: employee.isActive,
        };
        return axios.post(`${API_BASE_URL}/Employee${API_KEY}`, data);
    }

    updateEmployee(employee, empNo){
        return axios.put(`${API_BASE_URL}/Employee/${empNo}${API_KEY}`, employee);
    }
}

export default new EmployeeService();
