import { useState } from "react";
import ArticleCard from "../components/ArticleCard";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  const [articles, setArticles] = useState(props.blogData);
  return (
    <>
      <div className={styles.homeWrap}>
        <div className={styles.homePage}>
          {articles &&
            articles.map((item) => {
              return <ArticleCard key={item._id} data={item} />;
            })}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const data = await fetch("http://localhost:3000/api/articles");
  const blogData = await data.json();
  return {
    props: { blogData },
  };
}
