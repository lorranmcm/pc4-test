let app = new Vue({
  el: "#app",
  data: {
      employees: [],
      name: 'Employee App',
      employee: {
        name: '',
        email:'',
        department:'',
        occupation:'',
        profile_image:'',
        cpf:'',
        role:'',
        active:''
      },
      isEdit: false
  },
  created() {
      this.employees = JSON.parse(localStorage.getItem('employeesApp'));
  },
  methods: {
      saveEmployee(employee) {

          let employees = localStorage.getItem('employeesApp');

          employee.id = new Date().getTime();

          if(employees) {
              
              employees = JSON.parse(employees);
              employees.push(employee);

          } else {
              employees = [employee];
          }

          this.employees = employees;

          localStorage.setItem('employeesApp', JSON.stringify(employees));

          location.reload();
      },
      removeEmployee(employeeId) {
          let employees = localStorage.getItem('employeesApp');

          if(!employees) return;

          employees = JSON.parse(employees);

          employees = employees.filter((employee) => {
              return employee.id != employeeId;
          });

          this.employees = employees;

          localStorage.setItem('employeesApp', JSON.stringify(employees));
      },
      editEmployee(employee) {
          this.employee = employee;
          this.isEdit = true;
      },
      updateEmployee(employee) {
          let employees = this.employees.map(employeeMap => {
              if(employeeMap.id == employee.id) {
                  return employee;
              }

              return employeeMap;
          });

          this.employees = employees;
          this.isEdit = false;

          localStorage.setItem('employeesApp', JSON.stringify(employees));

          location.reload();

      }
  }
});