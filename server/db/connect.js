const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://abhi:data@project@cluster0.mke0s.mongodb.net/project_data?retryWrites=true&w=majority",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Connection successfull with db")
})
.catch(err=>{
    console.log("Connection to db not successfull due to",err);
})
