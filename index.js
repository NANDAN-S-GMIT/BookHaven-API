const express = require('express');
const app = express();

const public_users = require('./router/general.js').general;
const regd_users = require('./router/auth_users.js').authenticated;

app.use(express.json());

app.use('/customer', public_users);
app.use('/customer', regd_users);

const PORT = 5000;
app.listen(PORT, () => {
  console.log('Server is running');
});
