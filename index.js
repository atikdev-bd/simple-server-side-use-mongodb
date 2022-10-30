const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const users = [
  { id: 1, name: "Mizanur Rahman", email: "mizan@gmail.com" },
  { id: 2, name: "Minhazul Islam", email: "piash@gmail.com" },
  { id: 3, name: "Milton", email: "milton@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("simple node server running");
});

// user id : dbuser2

/// password : Jv1yXHde8hO89h2d



const uri = "mongodb+srv://dbuser2:Jv1yXHde8hO89h2d@cluster0.h7epoo8.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.post("/users", (req, res) => {

    
    if(req.query.name){
        const search = req.query.name
        const filtered = users.filter(usr => usr.name.toLowerCase().indexOf(search) >=0)
        res.send(filtered)
    }else{
        res.send(user)
    }
  const user = req.body
  user.id = users.length +1
  users.push(user)
 
  
 
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log("node server is running on port :", port);
});
