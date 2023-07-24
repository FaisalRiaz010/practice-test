const mongoose=require('mongoose');

mongoose.connect
('mongodb+srv://mfoggyfaisal:KgbB5yvr5et0qInl@cluster0.ovsm2tn.mongodb.net/faisaldb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log("Mongodb is connected");
  }).catch((err)=>{
    console.error("Not connected to db",err);
  });