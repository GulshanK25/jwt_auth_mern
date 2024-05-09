import  express  from "express";
import dotenv from 'dotenv';
import controuter from "./routes/contactroute.js";
import router from "./routes/userroute.js";
import errorHandler from "./middleware/errorhandler.js";
import { connectdb } from "./config/dbconnection.js";




dotenv.config();

connectdb();
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000 ;
app.use('/api/contacts', controuter)
app.use('/api/users', router)
app.use(errorHandler)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))