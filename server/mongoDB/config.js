import mongoose from "mongoose";

async function connect() {
  await mongoose
    .connect(
      "mongodb+srv://guitadharsh:guitadharsh@cluster1.nujfv.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("database connected succesfully");
    })
    .catch((err) => {
      console.log(err);
    });
}

export default connect;
