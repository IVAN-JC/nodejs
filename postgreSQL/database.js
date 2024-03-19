console.log("server is starting...");

let express = require('express');

let app = express();
let server = app.listen(3000, listening);
// Добавим функцию прослушивания
function listening() {
    console.log("Listening...");
}

// выполним соединение с базой данных
const {Client} = require('pg')
const client = new Client({
    host: "localhost",
    user: "postgres",
    password: "postgres",
    port: 5432,
    database: "postgres"
})

client.connect();

app.get('/select', (req, res) => {
    console.log('Select');
    client.query(`select * from users`, (err, res) => {
        if (!err) {
            console.log(res.rows);
        } else {
            console.log(err.messeage);
        }
    })
});

// Вставка данных
app.get('/insert', (req, res) => {
    console.log('Insert');
    client.query(`insert into users(name, telephone, nickname) 
    values ('newuser', 'newtelephone', 'newnickname')`, (err, res) => {
        if (!err) {
            console.log(res.rows);
        } else {
            console.log(err.messeage);
        }
    })
});

// Обновление данных
app.get('/update', (req, res) => {
    client.query(`update users set name='Demon' where name ='newuser'`, (err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        if (err) {
            console.error(err);
            return;
        }
        console.log('Data update successful');
    });
})

// Удаление данных
app.get('/delete', (req, res) => {
    client.query(`delete from users where name ='Ivan'`, (err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        if (err) {
            console.error(err);
            return;
        }
        console.log('Data delete successful');
    });
})
