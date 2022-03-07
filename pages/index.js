import { useState, useEffect } from "react";
import ArticleCard from "../components/ArticleCard";
import styles from "../styles/Home.module.css";
export default function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? (
        <div className={styles.loading}>
          <h1>Loading....</h1>
        </div>
      ) : (
        <div className={styles.homeWrap}>
          <div className={styles.homePage}>
            {articles &&
              articles.map((item) => {
                return <ArticleCard key={item._id} data={item} />;
              })}
          </div>
        </div>
      )}
    </>
  );
}
