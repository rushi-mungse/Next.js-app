import Link from "next/link";
import styles from "../styles/ArticleCard.module.css";

const ArticleCard = ({ key, data }) => {
  return (
    <div className={styles.articleCard} key={key}>
      <Link href={`/article/${data._id}`}>
        <h1 className={styles.articleTopic}>{data.articleTopic}</h1>
      </Link>
      <p className={styles.articleSummary}>
        {data.articleSummary.substring(0, 150)} ...
      </p>
      <div className={styles.articleData}>
        <span className={styles.articleCreatedAt}>9:56 PM</span>
        <strong className={styles.articleAuthor}>{data.articleAuthor}</strong>
      </div>
    </div>
  );
};

export default ArticleCard;
