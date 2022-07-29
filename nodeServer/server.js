const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/routes.js')(app, fs);


const server = app.listen( 3000, () => {
    console.log(`Working on: ${server.address().port}`);
});


//const addressJSON = require('./address.json');
// function returnData() {
//     let data;
//     fs.readFileSync("./nodeServer/address.json", "utf8", (err, jsonString) => {
//         data = JSON.parse(jsonString),
//         console.log(data);
//     });
// }


// returnData();



// app.get('/address', (req, res) => {
    
//     const addressJSON = require('./address.json');
//     res.status(200).send({ addressJSON })
// });

// app.post('/address', (req, res) => {
//     const addressJSON = require('./address.json');
//     res.send(
//         fs.writeFileSync(path.resolve(__dirname, 'address.json'), JSON.stringify(serverJson))
//   )})


