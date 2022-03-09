import { useRouter } from "next/router";
import styles from "../../styles/Slug.module.css";
const slug = ({ blogData }) => {
  const router = useRouter();
  const { slug } = router.query;
  function createMarkup(articleContent) {
    return { __html: articleContent };
  }
  return (
    <div className={styles.slugPage}>
      <div className={styles.contentWrap}>
        <div
          dangerouslySetInnerHTML={createMarkup(blogData.articleContent)}
          className={styles.articleContent}
        ></div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const id = context.params.slug;
  const data = await fetch("http://localhost:3000/api/get-article", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  const blogData = await data.json();
  return {
    props: { blogData },
  };
}

export default slug;
