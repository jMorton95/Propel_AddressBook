# Propel_AddressBook
Address Book Application for Propel Tech's Technical Assessment:  
  
Front-end Stack: HTML5, SCSS, JS ES6, WebPackJS:  Babel transcompiler, SASS preprocessor, Concurrently plugin.
Back-end Stack: Node.js: Express framework, CORS, File System Library
  
Session 1 26/07:  
Built a simple single page front-end app that imports an Array of Objects from a .JSON Flat File and creates an Address Book Card for each index and a functional form that can store a new implementation of an Address Object with an ES6 Class and render new cards.    

With a background entirely in Vanilla Front-End builds to date, this has been a challenge right to configure right from the start.

<-- Key Learning Points:  -->  
This has pushed me to learn new JS techniques, such as:  

-- An extensible DOM Element producing Function that takes a tag type, class, text content and any number of children Elements to append and returns a new DOM     Object.
-- Creating an Array from all Values in a NodeList through .map() and immediately assigning the results to a Class Instantiation  
-- I've really grasped function parameters and how powerful they can be in the right context on a much deeper level than I have in prior study. Passing a specific object index deep into a function tree and how powerful custom parameters in certain instances can be.  

Considerations for next day:  
I currently have no knowledge or experience in API or Backend Development, so I'll first find a way to modify my flat JSON file to mimic a soft Database before diving deep into API to see if I can find an implementation in-time for submitting this assessment!


Session 2 27/07 TO 29/07:  
Summary of the odd few hours on break at work and after mid-week shifts:  

At first I hosted a 'Fake JSON-Server' on a web-hosting service that made my JSON flat file available on a webpage, but any POST requests would only be fake cached data on the site, and would expire when a session was over.  
Then I went a step further and used a JSON-Server plugin that was essentially the same thing as the hosted fake server page. However I decided against it as I wasn't learning anything about backend development from this solution, so it didn't feel valuable.  
Finally, I settled on creating a NODE.js back-end server within my application folder. My Frontend runs on localhost:8080 while my Backend runs on localhost:3000. I'm using a webpack library called 'Concurrently', this allows me to run two scripts simultaneously and will terminate both if each fails.  

Currently my Backend contains a read and a write function that slightly refactors the READ and WRITE methods of File System, these take helper parameters and our FIlePath that feed into the base methods calls to reduce code replication in my GET and POST API methods. I've created a GET method that calls our READ function and makes our JSON file available at the End Point: "localhost:3000/address_book", as well as a POST method that takes a request from the Frontend, calls our WRITE function and stores it as new JSON Object in our flat file. 

I've added a function that asynchronously GETS data from our Node localhost:3000/address_book endpoint, parses it with .json() and returns it, I've also created an asynchronous function that awaits a call to our GET function, then we parse our JSON object to an array with .map on Object.keys and then we call our Frontend function to render an address entry for each index in our array. This results in the same page I had with my Day 1 implementation, but we're now using a functioning backend server to store and pull our data from. Progress!

<-- Key Learning Points: -->  
-- Node Backend server configuration from zero prior knowledge.  
-- Understanding File System methods and filepath routing, express.js GET and POST methods and the context of a response and request.  
-- Asynchronous functions and utilising their returns with the AWAIT Keyword.  

These were all completely new to me this week, it's been challenging learning at a much faster pace than I am used to. However I am sure with more practice, in the future these key skills will become second nature to me.


