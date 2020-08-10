const express = require('express');
const app = express();
const Gtts = require('gtts');
const bodyparser=require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine",'ejs');
app.get('/',(req,res)=>{
  res.render('index.ejs')
});
app.post('/',(req,res) => {
  var text=req.body.text;
  const speech = new Gtts(text);
  speech.save("voice1.mp3")   
}).then(()=>{
  res.download("voice1.mp3")
})


app.listen(3000,()=>{
  console.log('server is listening');
})