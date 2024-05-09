import  express  from "express";
import { getcontacts, delcontact,updatecontact,getcontact,createcontact } from "../controllers/conactcontroller.js";


const controuter = express.Router();

controuter.get("/", (req, res) => {
    getcontacts(req, res);
});
controuter.post('/', (req, res) => {
    //res.send('GET request to the homepage')
    createcontact(req, res);
  });
  
controuter.get('/:id', (req, res) => {
    //res.send('GET request to the homepage')
    getcontact(req, res);
  });

controuter.delete('/:id', (req, res) => {
    //res.send('GET request to the homepage')
    delcontact(req,res);
  });

controuter.put('/:id', (req, res) => {
    //res.send('GET request to the homepage')
    updatecontact(req,res);
  });
  

  
  

export default controuter;
