window.addEventListener('DOMContentLoaded',() => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = `<tr>
    <th></th>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start Date</th>
    <th>Actions</th>
    </tr>`;
    let innerHtml = `${headerHtml}`;
    let employeePayrollList = createEmployeePayrollJson();
    for(const employeePayrollData of employeePayrollList) {
        innerHtml = `${innerHtml}
        <tr>
            <td><img class="profile" alt="" src="${employeePayrollData._profilePic}"></td>
            <td>${employeePayrollData._name}</td>
            <td>${employeePayrollData._gender}</td>
            <td>${getDeptHtml(employeePayrollData._department)}</td>
            <td>${employeePayrollData._salary}</td>
            <td>${employeePayrollData._startDate}</td>
            <td>
                <img name="${employeePayrollData._id}" onclick="remove()" alt="delete" src="../Employee Payroll App/Assets/icons/delete-black-18dp.svg">
                <img name="${employeePayrollData._id}" onclick="update()" alt="edit" src="../Employee Payroll App/Assets/icons/create-black-18dp.svg">
            </td>
    </tr>`;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for(const dept of deptList){
        deptHtml = `${deptHtml}<div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}

const createEmployeePayrollJson = () => {
    let employeePayrollListLocal = [
        {
            _name: 'Pradnya Patil',
            _gender: 'Female',
            _department: [
                'HR'
            ],
            _salary: '350000',
            _startDate: '20 Aug 2020',
            _note: 'Hello',
            _id: new Date().getTime(),
            _profilePic: '../Employee Payroll App/Assets/Ellipse -1.png'
        },
        {
            _name: 'Prathamesh',
            _gender: 'Male',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary: '350000',
            _startDate: '26 Mar 2019',
            _note: 'Hii',
            _id: new Date().getTime(),
            _profilePic: '../Employee Payroll App/Assets/Ellipse -2.png'
        }
    ];
    return employeePayrollListLocal;
}