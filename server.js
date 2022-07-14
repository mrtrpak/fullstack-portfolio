const axios = require('axios'),
 express = require('express'),
 cors = require("cors"),
 path = require('path'),
 PORT = process.env.PORT || 3333;

app = express();

app.use(cors());

app.get('/', (req,res) => {
  res.send("hello from the server");
});

app.listen(
  PORT, () => console.log(`server live on http://localhost:${PORT}`)
);
