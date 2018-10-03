module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('users', {
		emailId: {
			type: Sequelize.STRING
		},
		tokenValue: {
			type: Sequelize.STRING
		},
		tokenKey: {
			type: Sequelize.STRING
		}
	});

	return User;
}