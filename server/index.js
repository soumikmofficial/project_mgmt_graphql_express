const express = require("express");
require("dotenv").config();
const app = express();
const { graphqlHTTP } = require("express-graphql");
const connectDB = require("./config/connect");
const schema = require("./schema/schema");

connectDB();

// middlewares
app.use(
  "/graphql",
  graphqlHTTP({ schema, graphiql: process.env.NODE_ENV === "development" })
);

// .............
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening to port number: ${port}`);
});
