const mysql = require("mysql2")

//Needs the .dev.env file in order to access the database properly
let pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

//Select all entries in the table
module.exports.SelectAll = () =>{

    return new Promise((resolve, reject) => {

        pool.query("SELECT * FROM todolist", (err, results) => {

            err ? reject(err) : resolve(results);
        })
    })
}

//Find by id
module.exports.SelectById = (id) => {

    return new Promise((resolve, reject) => {

        pool.query("SELECT * FROM todolist WHERE (id = ?)", id, (err, results) => {

            err ? reject(err) : resolve(results);

        })
    })
}

//create
module.exports.Create = (object) => {

    return new Promise((resolve, reject) => {

        pool.query("INSERT INTO todolist (??) VALUES (?)", [Object.keys(object), Object.values(object)], (err, results) => {

            err ? reject(err) : resolve(results)
        })
    })
}

//Search the database for a specific value
module.exports.findBy = (property, val) => {

    return new Promise((resolve, reject) => {

        pool.query("SELECT * FROM todolist WHERE (?? = ?)", [property, val], (err, results) => {

            err ? reject(err) : resolve(results);
        })
    })
}

/*This method is similar to findBy
but it looks for the status of a specific item in the to-do list
*/
module.exports.getStatus = (id) => {

    return new Promise((resolve, reject) => {

        pool.query("SELECT status FROM todolist WHERE (id = ?)", id, (err, results) => {

            err ? reject(err) : resolve(results);
        })
    })
}

//Update an entry in the database
module.exports.Update = (prop, value, object) => {

    return new Promise((resolve, reject) => {

        pool.query("UPDATE todolist SET ? WHERE (?? = ?)", [object, prop, value], (err, results) => {

            err ? reject(err) : resolve(results);
        })
    })
}

//Delete an entry from the database
module.exports.Delete = (prop, value) => {

    return new Promise((resolve, reject) => {

        pool.query("DELETE FROM todolist WHERE (?? = ?)", [prop, value], (err, results) => {

            err ? reject(err) : resolve(results);
        })
    })
}
