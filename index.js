import express from "express"
import cors from "cors"

const app = express();
app.use(cors());


// definiranje backend rute
app.get('/banana', (req, res) => {
    res.json({ status: 'zelena' });
});

// pokretanje procesa web servera 
let port = 3001
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});