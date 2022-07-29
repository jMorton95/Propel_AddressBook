const addressRoutes = require('./addressBook.js');

const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send('Address Book API');
    });

    addressRoutes(app, fs);
};

module.exports = appRouter;