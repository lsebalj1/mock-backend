import express from "express"
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json());

function fn_rentify(req, res){
    console.log("Rentify je pozvan");
    return res.json({ status: 'zelena' });
}

// definiranje backend rute
app.get('/rentify', fn_rentify);

// pokretanje procesa web servera 
let port = 3001
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});