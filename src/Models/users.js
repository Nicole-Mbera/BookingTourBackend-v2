import mongoose from "mongoose";




const userSchema = new mongoose.Schema(
    {
firstName:String,
lastName:String,
email:{
 type:String,
 required:true,
 unique:true,
},
 
password:{
type:String,
required:true,
},

adress: {
type:String,
default:"Rwanda"
},
gender:{
    type:String,
    enum:["male","female","other","prefer-not-to-say"]
},


role:{
    type:String,
    enum:["user","admin"],
    default:"user"
}

    },
{
    timestamps:true,
}
    );

    const user =mongoose.model("User",userSchema);

    export default user;