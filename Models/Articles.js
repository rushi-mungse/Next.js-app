const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    articleTopic: { type: String, required: true },
    articleSummary: { type: String, required: true },
    articleAuthor: { type: String, required: true },
  },
  { timestamps: true }
);

mongoose.models = {};

const Article = mongoose.model("Article", articleSchema);

export default Article;
