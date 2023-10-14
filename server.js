const express = require('express')

const bodyparser = require("body-parser");

const app = express()
const port = 3000

app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.static("public"))
app.set('view engine', 'ejs');

let items=["Exercise"," Going to office","Doing html,css"];
let workitem=[];
app.get("/", (req, res) => {

  let today = new Date();
  let options ={
    weekday: "long",
    day: "numeric",
    month: "long"

  };
  let Day =today.toLocaleDateString("en-US",options)

   res.render("list",{
    ListTitle:Day , newListItem:items
   });

  });

app.post("/",(req, res) => {
    //console.log(req.body)
   let item = req.body.Newitem;
   if(req.body.list === "Work List")
   {
    workitem.push(item)
    res.redirect("/work")
   }

   else
   {
    items.push(item)
    res.redirect("/")
   }
   

});

app.get("/work",(req, res) =>{
  res.render("list",{
    ListTitle:"Work List" , newListItem:workitem
   });
});

app.post("/",(req, res) => {
    
  let item = req.body.Newitem;
  workitem.push(item)
  res.redirect("/work")

});

app.listen(port, () => {
  console.log(` listening on port ${port}`)
});