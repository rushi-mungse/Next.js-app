import mongoose from "mongoose";

//mongoose connection
function DbConnected() {
  mongoose.connect(
    "mongodb://localhost:27017/Notes?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    console.log("DB Connected..");
  });
}

export default DbConnected;
