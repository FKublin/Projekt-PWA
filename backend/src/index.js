const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const seedDatabase = require('./seed')
const routes = require('./routes/index')

const server = async () => {
  try {
    await mongoose.connect('mongodb://localhost/PROJEKTPWA'); 

  await mongoose.connection.db.dropDatabase();
  await seedDatabase.seedDatabase()
  } catch(error) {
    console.log(error)
  }
  

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(__dirname + '/public'));
app.use('/static', express.static(__dirname + '/public'))


app.use(
cors({
  origin: [
    process.env.CLIENT_APP_URL,
    "http://localhost:8080"
  ],
  credentials: false
})
);

app.use("/review", routes.reviewRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}

server()
