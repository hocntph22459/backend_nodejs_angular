import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const {URL_DB}:any = process.env
const {NAME_DB}:any = process.env
const Connectdb = ()=>{
    mongoose.connect(URL_DB + NAME_DB)
    .then(()=>console.log("connect successfully"))
    .catch(()=>console.log("connect failed"))
}

export default Connectdb