import express from "express";
import cors from "cors";
import smjestajiModel from "./model/smjestajiModel.js";
import najamModel from "./model/najamModel.js";

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use("/api/rentify", router);

router.get("/", (req, res) => {
  console.log("Rentify je pozvan");
  return res.json({ status: 'Rentify je pozvan' });
});

router.get("/smjestaji", (req, res) => {
  return res.status(200).json({ smjestaji: smjestajiModel.data }).end();
});

router.get("/najam", (req, res) => {
  return res.status(200).json({ najam: najamModel.data }).end();
});

router.post("/novi_smjestaj", (req, res) => {
  try {
    const { name, tip, description, price, slika, zvjezdice, brojOsoba } = req.body;
    const noviSmjestaj = { name, tip, description, price, slika, zvjezdice, brojOsoba };
    console.log("POST request data:", req.body);
    smjestajiModel.data.push(noviSmjestaj);
    return res.status(201).json({ smjestaj: noviSmjestaj }).end();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error', details: error.message }).end();
  }
});

router.post("/novi_najam", (req, res) => {
  try {
    const { name, tip, description, price, slika, brojOsoba } = req.body;
    const noviNajam = { name, tip, description, price, slika, brojOsoba };
    console.log("POST request data:", req.body);
    najamModel.data.push(noviNajam);
    return res.status(201).json({ najam: noviNajam }).end();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error', details: error.message }).end();
  }
});

// pokretanje procesa web servera
let port = 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// POST request example raw json
/*
{
  "name": "New Apartment",
  "tip": "apartman",
  "description": "A beautiful new apartment",
  "price": 1200,
  "slika": "putanja/do/slike.jpg",
  "zvjezdice": 5,
  "brojOsoba": 3
}

{
  "name": "New Rental",
  "tip": "garsonijera",
  "description": "A cozy rental space",
  "price": 1000,
  "slika": "putanja/do/slike_rentala.jpg",
  "brojOsoba": 2
}
*/
