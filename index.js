const express = require("express");
const app = express();
var cors = require("cors");
const port = 3000;
const destination=require('./data/destination.json')
const hotelData=require('./data/hotel.json')

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello Travel wise!");
});


app.get('/destination',(req,res)=>{
  console.log("destination data");
  res.send(destination)
})
// whole hotel data
app.get("/hotelData",(req,res)=>{
  res.send(hotelData)
})
// filter data according to category
// specific data
app.get('/hotelData/:id',(req,res)=>{
  const id=req.params.id;
  const selectedData=hotelData.filter(data=>data.category_id==id)
  console.log(selectedData);
  res.send(selectedData)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
