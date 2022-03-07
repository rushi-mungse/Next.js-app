export default async function postArticles(req, res) {
  if (req.method === "POST") {
    try {
      return res.status(200).json({ message: "OK" });
    } catch (error) {
      return res.status(401).json({ errors: "Internal server error." });
    }
  } else {
    return res.status(401).json({ errors: "Something went wrong." });
  }
}
