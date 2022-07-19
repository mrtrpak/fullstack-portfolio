const axios = require('axios'),
 express = require('express'),
 cors = require("cors"),
 path = require('path'),
 PORT = process.env.PORT || 3333;
app = express();

const soccerKey = process.env.soccerKey;
const { soccerKeyDevelopment } = require('./secret');

app.use(cors());

//serve static files from react

app.get('/', (req,res) => {
  res.send("hello from the server");
});

app.get('/api/soccer', async (req, res) => {
  try {
    const response = await axios({
      "url": 
        `https://api.football-data.org/v2/competitions/BL1/standings`,
      "headers": {
        "X-Auth-Token": soccerKey || soccerKeyDevelopment,
        "Content-Type": "application/json"
      }
    })
    res.send(response.data.standings[0].table);
  } catch (err) {
    res.send(err);
  };
});

app.listen(
  PORT, () => console.log(`server live on http://localhost:${PORT}`)
);
