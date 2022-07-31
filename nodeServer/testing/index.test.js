//Server Dependencies
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const request = require('supertest');

//Setup our Instance of Express, using cors and express' built-in BodyParser
const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//Import our custom routing.
const routes = require('./testRoutes/testRoutes.js')(app, fs);

/*Host our testing server on port 4000 */
// const server = app.listen( 4000, () => { } );


describe("testing-server-routes", () => {
  it("GET /address_book", async () => {
    const { body } = await request(app).get("/address_book"); //uses the request function that calls on express app instance
    expect(body).toEqual(
      {
        "faf86400-103f-11ed-8b54-25fc05d0cd5e": {
          "first_name": "Steve",
          "last_name": "McDonald",
          "phone": "01913478555",
          "email": "steve.mcdonald@corrie.co.uk"
        },
        "217e68f0-103f-11ed-b91c-4da293fc03a4": {
          "first_name": "David",
          "last_name": "Hurst",
          "phone": "01913478234",
          "email": "david.platt@corrie.co.uk"
        },
        "b66882c0-103f-11ed-9cf6-ef996cac6d5b": {
          "first_name": "Jason",
          "last_name": "Grimshaw",
          "phone": "01913478123",
          "email": "jason.grimshaw@corrie.co.uk"
        },
        "b6c521b0-103f-11ed-9b81-a965985532d4": {
          "first_name": "Ken",
          "last_name": "Barlow",
          "phone": "019134784929",
          "email": "ken.barlow@corrie.co.uk"
        },
        "b712f390-103f-11ed-883c-5b15f3ba4cd5": {
          "first_name": "Rita",
          "last_name": "Sullivan",
          "phone": "01913478555",
          "email": "rita.sullivan@corrie.co.uk"
        }
      }
    );
  });
});


module.exports = app;


