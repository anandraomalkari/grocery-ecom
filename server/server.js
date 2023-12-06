const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
//token
const jwt = require('jsonwebtoken');
// Secret key for signing the token (keep this secret and do not expose it in your code)
const secretKey = '2iImQLxV8MwWRtddShB2m1jq'; // Replace with your actual secret key

function generateTokenForUser(user) {
  const payload = {
    userId: user.id, // Include user-specific data as needed
  };
  

  // Create a token with an expiration time (e.g., 1 hour)
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

  return token;
}
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    port: 4306,
    user: "root",
    password: "",
    database: "signup"
})


app.get('/', (req, res) => {
    return res.json("check");
})
app.post('/signin', (req, res) => {
    // const sql = "INSERT INTO login('name','email','mobile','password' VALUES (?)";
    const sql = `INSERT INTO login(name,email,mobile,password) VALUES ('${req.body.name[0]}', '${req.body.email[0]}', ${req.body.mobile[0]},'${req.body.password[0]}')`;
    db.query(sql, (err, data) => {
        if (err) {
            console.log(err)
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/signup', (req, res) => {
    console.log(req.body)
    // const sql = "SELECT * FROM login WHERE email='?' AND password ='?'";
    const sql2 = `SELECT * FROM login WHERE email='${req.body.email[0]}' AND password ='${req.body.password[0]}'`;
    console.log(sql2)
    db.query(sql2, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json("Success");
        }
        else {
            return res.json("Fail");
        }
    })
})


app.listen(3000, () => {
    console.log("listening...");
})