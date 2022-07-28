const axios = require('axios'),
 express = require('express'),
 cors = require('cors'),
 path = require('path'),
 PORT = process.env.PORT || 3333;
app = express();

const { soccerKeyDevelopment } = require('./secret');
const soccerKey = process.env.soccerKey;

app.use(cors());

// serve static files from react
app.use(express.static(path.join(__dirname, 'client/build')));

// allows server to read post request sent as json
app.use(express.json({ limit: '1mb' }));

app.get('/', (req,res) => {
  res.send("hello, I'm a server");
});

app.get('/api/soccer', async (req, res) => {
  let code = req.query.code || 'BL1';
  console.log(code, 'server');
  try {
    const response = await axios({
      "url": 
        `https://api.football-data.org/v2/competitions/${code}/standings`,
      "headers": {
        "X-Auth-Token": soccerKeyDevelopment,
        "Content-Type": "application/json"
      }
    })
    console.log(response.data.standings[0].table);
    res.send(response.data.standings[0].table);
  } catch (err) {
    res.send(err);
  };
});

// app.post('/api/soccer/league', (req, res) => {
//   leagueCode = req.body;
//   console.log(leagueCode.leagueCode);
// });

// anything that doesn't match the above routes will send back index.html
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
});

app.listen(
  PORT, () => console.log(`server live on http://localhost:${PORT}`)
);
