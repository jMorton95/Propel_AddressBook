const addressRoutes = (app, fs) => {
    // variables
    const dataPath = './nodeServer/data/addressBook.json';
  
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

      

    // READ
    app.get('/address_book', (req, res) => {
      readFile(data => {
        res.send(data);
      }, true);
    });

    // CREATE
    app.post('/address_book', (req, res) => {
        readFile(data => {
        // Note: this needs to be more robust for production use. 
        // e.g. use a UUID or some kind of GUID for a unique ID value.
        const id = (Object.keys(data).length + 1);
        const newAddress = Date.now().toString();
    
        // add the new user
        data[id] = req.body;
    
        writeFile(JSON.stringify(data, null, 2), () => {
            res.status(200).send('new user added');
        });
        }, true);
    });

  };
  
  module.exports = addressRoutes;