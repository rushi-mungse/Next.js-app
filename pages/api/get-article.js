import Article from "../../Models/Articles";

export default async function getArticle(req, res) {
  const { id } = req.body;
  if (req.method === "POST") {
    try {
      const data = await Article.findOne({ _id: id });
      return res.status(200).json(data);
    } catch (error) {
      return res.status(401).json({ errors: "Internal server error." });
    }
  } else {
    return res.status(401).json({ errors: "Req is not a post req." });
  }
}
