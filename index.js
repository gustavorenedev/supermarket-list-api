const express = require('express');
const app = express();
const routes = require('./src/routes/index')
// configurando o servidor para aceitar json
app.use(express.json());
const mongoose = require('mongoose');
const port = 3333;

async function connectDatabase() {
    await mongoose.connect('mongodb://localhost:27017/');
}

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    connectDatabase().catch((error) => {
        console.log(`Error connecting database: ${error}`);
    });
    app.use("/", routes);
    console.log('App is running at port 3333');
})