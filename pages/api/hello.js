import DbConnected from "../../utils/database";
import Article from "../../Models/Articles";

DbConnected();

export default async function article(req, res) {
  try {
    const data = await Article.find();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(401).json({ errors: "Internal server error." });
  }
}
