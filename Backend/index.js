const express=require('express');
const cors=require('cors');
const mongoose = require("mongoose");
const server = express()
server.use(cors(
    {
        origin:["https://mern-app-demo.vercel.app"],
        methods:["POST","GET"],
        credentials:true
    }
))

server.use(express.json());


const { Schema } = mongoose;

const UserSchema = new Schema({
        username: String,
        password: String
});

 const User = mongoose.model("User", UserSchema);

  main().catch((err) => console.log(err));

  async function main() {
   await mongoose.connect("mongodb+srv://liaqatali0922:Aa03029610374Zz@cluster0.9vlan2n.mongodb.net/?retryWrites=true&w=majority");
   console.log("database connected");
  }

server.post("/demo", async (req, res) => {
    
    let user = new User()
    user.username = req.body.username
    user.password =  req.body.password
    const doc = await user.save()
    res.send(doc)
});

server.get('/demo', async (req,res)=>{
    const detail = await User.find()
    res.send(detail)
})

server.listen(8080,()=>{
 console.log('server started')
})
