const express = require('express');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars')
const hbs = exphbs.create({})
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/indexRoute'));

// turn on connection to db and server
// app.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });
// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
