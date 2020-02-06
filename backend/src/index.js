const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const seedDatabase = require('./seed')
const routes = require('./routes/index')
const bodyParser = require('body-parser')
const app = express()
const port = 3000


const server = async () => {
  try {
    await mongoose.connect('mongodb://localhost/PROJEKTPWA', { useNewUrlParser: true }); 

  await mongoose.connection.db.dropDatabase();
  await seedDatabase.seedDatabase()
  } catch(error) {
    console.log(error)
  }
  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use(express.static(__dirname + '/public'));
app.use('/static', express.static(__dirname + '/public'))


app.use(
cors({
  origin: [
    "http://localhost:8080"
  ],
})
);

app.use("/review", routes.reviewRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}

server()
