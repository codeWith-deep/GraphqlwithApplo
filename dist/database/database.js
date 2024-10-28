import mongoose from "mongoose";
export const connetDB = (uri) => mongoose.connect(uri, { dbName: "GraphqlPracticeDB" })
    .then(c => {
    console.log(`Conneted with ${c.connection.name}`);
})
    .catch((e) => console.log(e));
