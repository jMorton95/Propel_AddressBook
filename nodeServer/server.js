//Server Dependencies
const express = require('express');
const cors = require('cors');
const fs = require('fs');

//Setup our Instance of Express, using cors and express' built-in BodyParser
const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/routes.js')(app, fs);

/*Host our server on port 3000 */
const server = app.listen( 3000, () => {
    console.log(`Working on: ${server.address().port}`);
});
