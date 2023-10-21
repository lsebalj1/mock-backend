import express from "express"
const app = express();

app.get('/banana', (req, res) => {
  res.json({status: 'zelena'});
});

let port = 3001

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});