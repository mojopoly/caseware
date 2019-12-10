const employees = require('./MOCK_DATA');
const express = require('express');
const cors = require('cors');
const path = require('path');


const app = express();

app.use(express.json());
app.use(cors());

//PORT
const port = process.env.PORT || 5000;


// Set static folder
app.use(express.static(path.join(__dirname, 'public')))


app.get('/api/employees', (req, res) => {
  const fullName = req.query.fullName;

  const [firstName, lastName] = fullName.trim().split(' ');

  const employee = employees.find(
    employee => employee.first_name === firstName && employee.last_name === lastName
  );
  if (!employee) res.status(404).send('No employee ID matched your query'); //404 object not found
  res.status(200).json(employee);
});



app.listen(port, () => console.log(`Listening on port ${port}...`));
