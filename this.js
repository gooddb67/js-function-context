const listEmployees = function() {
  this.employees.forEach(function(employee) {
    console.log(employee.name);
  });
};

const tgif = {
  name: "T.G.I. Friday's",
  employees: [{ name: 'Alex' }, { name: 'Terrance' }, { name: 'Daniel' }],
  listEmployees: listEmployees
};

const chipotle = {
  name: 'Chipotle',
  employees: [{ name: 'Tim' }, { name: 'Esmery' }, { name: 'Jason' }],
  listEmployees: listEmployees
};
