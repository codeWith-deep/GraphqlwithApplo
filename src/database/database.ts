
import e from "express";
import mongoose from "mongoose";

export const connetDB = (uri:any) => mongoose.connect(uri, {dbName: "GraphqlPracticeDB"})
.then(c=> {console.log(`Conneted with ${c.connection.name}`)

})
.catch((e) => console.log(e))
