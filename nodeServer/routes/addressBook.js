/**We're using a Unique User Identifier Library here to generate unique IDs for Database entries */
const { v1: uuidv1 } = require('uuid');

const addressRoutes = (app, fs) => {
    //Assign our direct path to our 'Database'
    const dataPath = './nodeServer/data/addressBook.json';
  
    /*Create a modified read and write file method of File-System to reduce code replication.
      These take parameters needed by the built-in methods, we've pushed some default values in here so
      they don't need to be entered later on.*/
    const readFile = (
        callback,
        returnJson = false,
        filePath = dataPath,
        encoding = 'utf8'
      ) => {
        fs.readFile(filePath, encoding, (err, data) => {
          if (err) {
            throw err;
          }
    
          callback(returnJson ? JSON.parse(data) : data);
        });
      };
      
    const writeFile = (
        fileData,
        callback,
        filePath = dataPath,
        encoding = 'utf8'
    ) => {
        fs.writeFile(filePath, fileData, encoding, err => {
        if (err) {
            throw err;
        }

        callback();
        });
    };

    //Simply get all of our objects from the database.
    app.get('/address_book', (req, res) => {
      readFile(data => {
        res.send(data);
      }, true);
    });

    app.post('/address_book', (req, res) => {
        readFile(data => {
        /*Use the Unique Identifier Library to generate our ID.*/
        const id = uuidv1();
        // Add new Address to our Database
        data[id] = req.body;
        //Send our response as a object Key Value Pair of our ID Body
        entryIdPlusResBody = {[id] : req.body}
    
        writeFile(JSON.stringify(data, null, 2), () => {
            res.status(200).send(entryIdPlusResBody);
        });
        }, true);
    });

    app.put('/address_book/:id', (req, res) => {
      readFile(data => {
        //Grabs our Database id from the request, then overwrites it with the sent object data.
        const userId = req.params['id'];
        data[userId] = req.body;

        writeFile(JSON.stringify(data, null, 2), () => {
          res.status(200).send(`users id:${userId} updated`);
        });
      }, true);
    });
    
    app.delete('/address_book/:id', (req, res) => {
      readFile(data => {
        //Grab our Database ID from our request then delete the ID entry from our database
        const addressID = req.params["id"];
        delete data[addressID];

        writeFile(JSON.stringify(data, null, 2), () => {
          res.status(200).send(`address id:${addressID} removed`);
        });
      }, true);
  });

};
  
  module.exports = addressRoutes;