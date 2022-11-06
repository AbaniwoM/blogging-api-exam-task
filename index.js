const app = require('./app');
const connect = require('./database')

require("dotenv/config");

connect();

app.listen(3000, () => console.log("Listening in port 3000"));



