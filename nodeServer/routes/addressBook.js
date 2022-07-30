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

    app.get('/address_book', (req, res) => {
      readFile(data => {
        res.send(data);
      }, true);
    });

    app.post('/address_book', (req, res) => {
        readFile(data => {
        /*Post new record to an ID of 1 greater than our JSON Database's total records */
        const id = (Object.keys(data).length + 1);
    
        // add this to our database
        data[id] = req.body;
    
        writeFile(JSON.stringify(data, null, 2), () => {
            res.status(200).send(req.body);
        });
        }, true);
    });

  };
  
  module.exports = addressRoutes;