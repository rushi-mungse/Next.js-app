import Link from "next/link";
import styles from "../styles/ArticleCard.module.css";
const ArticleCard = ({ data }) => {
  return (
    <Link href={`/article/${data._id}`}>
      <div className={styles.articleCard}>
        <h1 className={styles.articleTopic}>{data.articleTopic}</h1>

        <p className={styles.articleSummary}>
          {data.articleSummary.substring(0, 150)} ...
        </p>
        <div className={styles.articleData}>
          <span className={styles.articleCreatedAt}>9:56 PM</span>
          <strong className={styles.articleAuthor}>{data.articleAuthor}</strong>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
