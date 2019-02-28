//  * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. 
//These are the methods you will need to use in order to retrieve and store data in your database.
var Connection = require("./connection.js");
var orm = {
	SelectAll: function (res) {
		Connection.query("SELECT * FROM burgers;", function (error, data) {
			if (error)
				throw error;
			console.log("All Burgers Selected!");
			console.log(data);
			res.render("index", { burgers: data });
		});
	},

	InsertOne: function (burgerName, devoured, date, res) {
		Connection.query("INSERT burgers (burger_name, devoured, date) VALUES (?, ?, ?)", [burgerName, devoured, date], function (error, data) {
			if (error)
				throw error;
			console.log("Thanks! Burger Added!!");
			console.log(data);
			res.redirect("/");
		});
	},

	UpdateOne: function (colName, newValue, idNumber, res) {
		Connection.query("UPDATE burgers SET ?? = ? WHERE id = ?", [colName, newValue, idNumber], function (error, data) {
			if (error)
				throw error;
			console.log("Burger Updated!");
			console.log(data);
			res.redirect("/");
		});
	}
};

module.exports = orm;