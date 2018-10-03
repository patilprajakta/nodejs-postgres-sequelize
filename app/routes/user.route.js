module.exports = (app) => {
    const users = require('../controllers/user.controller.js');
 
    // Create a new User
    app.post('/api/token', users.create);
 
    // Retrieve all User
    app.get('/api/token', users.findAll);
 
    // Retrieve a single User by Id
    app.get('/api/token/:emailId', users.findById);
 
    // Update a User with Id
    app.put('/api/token/:emailId', users.update);
 
    // Delete a User with Id
    app.delete('/api/token/:emailId', users.delete);
}