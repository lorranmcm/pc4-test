let app = new Vue({
  el: "#app",
  data: {
    name: 'Employee App',
    employee: {
      "name": '',
      "email":'',
      "department":'',
      "occupation":'',
      "profile_image":'',
      "cpf":'',
      "role":'',
      "active":''
    }
  },
  created() {
    this.employees = JSON.parse(localStorage.getItem('employeesApp'));
  },
  methods: {
    saveemployee(employee) {
      let employees = localStorage.getItem('employeesApp');

      employee.id = new Date().getTime();

      if(employees) {
        employees = JSON.parse(employees);
        employees.push(employee);
      } else {
        employees = [employee];
      }
      
      this.employees = employees;

      localStorage.setItem('employeesApp', JSON.stringify(employees))
    },
    removeemployee(employeeId) {
      let employees = localStorage.getItem('employeesApp');

      if(!employees) return;

      employees = JSON.parse(employees);

      employees = employees.filter((employee) => {
        return employee.id != employeeId;
      });

      this.employees = employees;

      localStorage.setItem('employeesApp', JSON.stringify(employees));
    }
  }
});