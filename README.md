# Propel_AddressBook
## Address Book Application for Propel Tech's Technical Assessment:  

### To Install and Run this application enter the following commands in your terminal:
`git clone https://github.com/jMorton95/Propel_AddressBook`  
`cd Propel_AddressBook`  
`npm install`  
`cd nodeServer`  
`npm install`  
`cd ..`  
`npm run test`  
`npm start`  

### Or if using the .zip version:
`Unzip the file and open your terminal inside of Propel_AddressBook`  
  
`npm install`  
`npm run test`  
`npm start`  
  
### Frontend Stack:  
`HTML5, SCSS, JS ES6, WebPackJS:  Babel transcompiler, SASS preprocessor, Concurrently plugin`  

### Backend Stack:  
`Node.js: Express framework, CORS, File System Library, Unique User ID API ('credit' : https://www.uuidtools.com/uuid-versions-explained), JEST testing library`
  
## Progress Log:  
### Session 1 26/07:     
Built a simple single page front-end app that imports an Array of Objects from a .JSON Flat File and creates an Address Book Card for each index and a functional form that can store a new implementation of an Address Object with an ES6 Class and render new cards.    

With a background entirely in Vanilla Front-End builds to date, this has been a challenge right to configure right from the start.

`<-- Key Learning Points:  -->`     
This has pushed me to learn new JS techniques, such as:  

-- An extensible DOM Element producing Function that takes a tag type, class, text content and any number of children Elements to append and returns a new DOM     Object.
-- Creating an Array from all Values in a NodeList through .map() and immediately assigning the results to a Class Instantiation  
-- I've really grasped function parameters and how powerful they can be in the right context on a much deeper level than I have in prior study. Passing a specific object index deep into a function tree and how powerful custom parameters in certain instances can be.  

Considerations for next day:  
I currently have no knowledge or experience in API or Backend Development, so I'll first find a way to modify my flat JSON file to mimic a soft Database before diving deep into API to see if I can find an implementation in-time for submitting this assessment!


### Session 2 27/07 TO 29/07:  
Summary of the odd few hours on break at work and after mid-week shifts:  

At first I hosted a 'Fake JSON-Server' on a web-hosting service that made my JSON flat file available on a webpage, but any POST requests would only be fake cached data on the site, and would expire when a session was over.  

Then I went a step further and used a JSON-Server plugin that was essentially the same thing as the hosted fake server page. However I decided against it as I wasn't learning anything about backend development from this solution, so it didn't feel valuable.  

Finally, I settled on creating a NODE.js back-end server within my application folder. My Frontend runs on localhost:8080 while my Backend runs on localhost:3000. I'm using a webpack library called 'Concurrently', this allows me to run two scripts simultaneously and will terminate both if either fails.  

Currently my Backend contains a read and a write function that slightly refactors the READ and WRITE methods of File System, these take helper parameters (with defaults) and our FilePath that feed into the base methods calls to reduce code replication in my GET and POST API methods.  

I've created a GET method that calls our READ function and makes our JSON file available at the End Point: "localhost:3000/address_book", as well as a POST method that takes a request from the Frontend, calls our WRITE function and stores it as new JSON Object in our flat file. 

I've added a function that asynchronously GETS data from our Node localhost:3000/address_book endpoint, parses it with .json() and returns it, I've also created an asynchronous function that awaits a call to our GET function, then we parse our JSON object to an array with .map on Object.keys and then we call our Frontend function to render an address entry for each index in our array. This results in the same page I had with my Day 1 implementation, but we're now using a functioning backend server to store and pull our data from. Progress!

`<-- Key Learning Points: -->`  
-- Node Backend server configuration from zero prior knowledge.    
-- Understanding File System methods and filepath routing, express.js GET and POST methods and the context of a response and request.  
-- Asynchronous functions and utilising their returns with the AWAIT Keyword.  

These were all completely new to me this week, it's been challenging learning at a much faster pace than I am used to. However I am sure with more practice, in the future these key skills will become second nature to me.  
  
  
### Session 3 30/07:   
Today I refactored my Backend with a Unique User Identifier API that will generate unique ID's for me to use as both solid database entries as well as to point to the specific entries I require to DELETE or update with PUT requests.  

I've altered these methods to send my Object Data as a Key (unique ID) Value (the object itself) Pair, as well as added asynchronous methods of splitting these pairs apart, extracting the ID as well as the completely object itself for rendering on my Frontend.  

I've also refactored numerous Frontend functions to reduce redundant code, be more readable and all-round more efficient!  

Finally I've deeply commented almost every section of this application to make it very clear what each individual function and component is achieving in the app. My parameter naming conventions have had a slight spruce up to make it very clear exactly what they're expecting and to make the context of a function call easy to understand.  

Updated the top of this README to show a quick installation manual.  
    
`<-- Key Learning Points: -->`  
  
-- Continued learning how to interact with my Node Server's methods, achieved a more advanced implementation that (theoretically) will never lead to input errors and duplicate data.  
-- Learned how to modify a URL path with a specific JSON property as a pointer for PUT and DELETE methods.  
-- A deeper understanding of how to create RESTFUL API's and call their built-in properties and methods.  
  
Tomorrow I'll need create a Frontend form component for updating database entries to interface with my PUT method, implement JEST testing Library and create some unit and integration tests.  
  
    
### Session 4 31/07:  
The main goal of today was to update my Frontend with functionality to make my DOM reflect updates to my Backend database. This was achieved by creating some functions that parses JSON object data returned from a PUT request and then finds the Address Card it needs to ammend and finally updates each field in the DOM tree with the updated data.  
Also cleaned up some syntax, added helper functions for document flow and added extra comments.  
`As of now, this is a fully functioning (albeit rudimentary) Frontend single-page application with data rendered and manipulated from a RESTful API with CRUD operations`  
  
I only had a small amount of time remaining to figure out testing my endpoints, for this I included the JEST testing library and SUPERTEST for helping with testing my endpoints.  
Due to lack of time I replicated my node server in a testing folder with my test file as 'index.test.js'.  
I've added a single integration test that checks that the content of my GET request matches a defined testing expectation.  
  
`<-- Conclusions -->`  
  
This has been a great assessment (and now portfolio project) that's forced me outside of my comfort zone to learn new technologies that I haven't had any prior experience with:  
(Backend, Endpoints, CRUD Operations, Reading/Writing data, RESTful API, Server routing, Asynchronous functions, JSON Parsing)  
And has also pushed the boundaries of my current Frontend knowledge, I've quickly become more competent at writing powerful Functions and I've had to think outside of the box to find solutions to many problems that this Project demanded.  
It would have been great if I had the time to take my testing further and if I could create this project again with the knowledge I've acquired through this process;  
I would build and define my Backend endpoints and HTTP methods first, implement indepth testing before creating my database and extending my implementation to include a fully operable SQL database (with extra learning).





