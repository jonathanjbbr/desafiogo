const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'desafionodedb',
    user: 'root',
    password: 'root',
    database: 'desafionodedb'
}
const mysql=require('mysql2')
const connection = mysql.createConnection(config)


const sqlCreateTable = `CREATE TABLE IF NOT EXISTS people (id INT NOT NULL AUTO_INCREMENT, name CHAR(30) NOT NULL,PRIMARY KEY (id));`;
const sqlInsert = `INSERT INTO people(name) VALUES('Jonathan')`;
const sqlSelect = `SELECT id,name FROM people`;


connection.promise().query(sqlCreateTable)
.then( result => {
    connection.promise().query(sqlInsert).then(
        result => {
            //console.log(result);
            app.get('/', (req,res) => {
                connection.query(sqlSelect, (err,rows) => {
                    if(err) throw err;
                  
                    //console.log('Data received from Db:');
                    //console.log(rows);
                    let htmlNomes='';
                    for (row of rows) {
                        htmlNomes +='<li>' + row.name;
                    }
                    res.send('<h1>Full Cycle Rocks!</h1>' 
                        + htmlNomes
                    );
                  });
            })
            
            app.listen(port, () => {
                console.log('Rodando na porta ' + port)
            })

            
        }
    );
});

//connection.end()

