const addressRoutes = require('./addressBook.js');

/*Pass our express app and file-system library into our routes.
    This is needed to access our server instance and to access our JSON file
    using the file-system library.*/

const appRouter = (app, fs) => {
    //Get our root domain and pass our app and FS reference
    app.get('/', (req, res) => {
        res.send('Address Book API');
    });

    addressRoutes(app, fs);
};

module.exports = appRouter;