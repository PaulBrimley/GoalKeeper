module.exports = {
	port: 4567,
	mongoUri: 'mongodb://localhost:27017/GoalKeeper',
	session: {
		sessionSecret: '20eggnog14',
		saveUninitialized: 'true',
		resave: true
	}

};