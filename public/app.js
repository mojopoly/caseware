const caseware = new CaseWare();

// search input
const searchEmployee = document.querySelector('.employee-search');

// search submit
const submitSearch = document.querySelector('.submit');

// employee seat and floor

const employeeGeo = document.querySelector('.employee-info');

// search input event listener
submitSearch.addEventListener('click', () => {
  const employeeName = searchEmployee.value;

  if (employeeName) {
    caseware.getEmployeeGeo(employeeName).then(data => {
      if (!data) {
        //show alert
        employeeGeo.innerHTML = `
        <h3 class="text-center text-red employee-geo">Sorry, cannot find ${employeeName} in the system</h3>
      `;
      } else {
        //show profile
        const { seat, floor, first_name } = data.profile;
        employeeGeo.innerHTML = `
          <h3 class="text-center text-blue employee-geo">${first_name} is seated on <br>Floor ${floor} <br>Seat ${seat}</h3>
        `;
      }
    });
  } else {
    employeeGeo.innerHTML = `
    <h3 class="text-center text-red employee-geo">Please type in a name!</h3>
  `;
  }
});
