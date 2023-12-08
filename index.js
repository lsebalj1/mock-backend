import express from "express"
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json());

let apartmani = [
    { id: 1, name: 'Apartment A', description: 'Modern apartment with a view', price: 1500 },
    { id: 2, name: 'Apartment B', description: 'Cozy studio near downtown', price: 1000 },
    { id: 3, name: 'Apartment C', description: 'Spacious loft with city skyline', price: 2000 }
  ];

app.get("/", (req, res) => {
    return res.json({ status: 'zeleno' });
})

function fn_rentify(req, res){
    console.log("Rentify je pozvan");
    return res.json({ status: 'Rentify je pozvan' });
}

// definiranje backend rute
app.get("/rentify", fn_rentify);

function fn_get_apartments(req, res){
    return res.json(apartmani);
}

app.get("/rentify/apartmani", fn_get_apartments);

function fn_create_apartment(req, res){
    try {
        const { name, description, price } = req.body;
        const noviApp = { name, description, price };
        apartmani.push(noviApp);
        return res.json(noviApp);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
}

app.post("/rentify/apartmani", fn_create_apartment);

/**POST
 * {
  "name": "New Apartment",
  "description": "A beautiful new apartment",
  "price": 1200
}
 */

// pokretanje procesa web servera 
let port = 3001
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});