const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors);

app.get('/', (req, res) => {
  res.send('Hello World!');
})

const port = 6006;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
