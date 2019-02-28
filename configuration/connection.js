var MySQL = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
	connection = MySql.createConnection(process.env.JAWSDB_URL);
} else {
 connection = MySQL.createConnection({
	host:"localhost",
	user: "root",
	password: "defiance",
	database: "burgers_db"
});
};

connection.connect(function(error) {
	if (error)
		throw error;
});

module.exports = connection;