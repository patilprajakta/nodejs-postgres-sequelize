module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('users', {
		emailId: {
			type: Sequelize.STRING,
			allowNull: false
		},
		tokenValue: {
			type: Sequelize.STRING,
			allowNull: false
		},
		tokenKey: {
			type: Sequelize.STRING,
			allowNull: false
		}
	});

	return User;
}