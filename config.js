const mysql = require('mysql');

const  connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'geo_search_server'
});

connection.connect((err) =>{
  if(err){
      console.log("err")
  }else{
    console.log("connected")
  }
});

module.exports = connection;