const db = require('../config/db.config.js');
const User = db.users;

// Post a User
exports.create = (req, res) => {
	console.log(req.body);
	User.create(req.body).then(user => {
		res.json(user);
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};

// FETCH All User
exports.findAll = (req, res) => {
	User.findAll().then(users => {
		res.json(users);
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};

// Find a User by emailId
exports.findById = (req, res) => {
	const emailId = req.params.emailId;
	User.find({
		where: {
			emailId: emailId
		}
	}).then(user => {
		if (user) {
			res.json(user);
		} else {
			res.json({ message: 'User with given emailId is not found' });
		}
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};
// Update a User
exports.update = (req, res) => {
	const emailId = req.body.emailId;
	User.update(req.body,
		{
			where: {
				emailId: emailId
			}
		}).then(() => {
			res.status(200).json({ message: "Updated Successfully : " + emailId });
		}).catch(err => {
			console.log(err);
			res.status(500).json({ msg: "error", details: err });
		});
};

// Delete a User by Id
exports.delete = (req, res) => {
	//Constant
	const emailId = req.params.emailId;
	User.destroy({
		where: { emailId: emailId }
	}).then(() => {
		res.status(200).json({ msg: 'Deleted Successfully : ' + emailId });
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};