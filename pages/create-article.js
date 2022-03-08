import TextateaBox from "../components/TextareaBox";
import styles from "../styles/CreateArticle.module.css";
const CreateArticle = () => {
  return (
    <div className={styles.createArticlePage}>
      <div className={styles.inputBoxWrap}>
        <h1>Create an Article.</h1>
        <TextateaBox
          labelName="Article Tipic"
          rows="3"
          placeholder="Enter the article topic name."
        />
        <TextateaBox
          labelName="Article Summary"
          rows="3"
          placeholder="Enter the article summary."
        />
        <TextateaBox
          labelName="Author Name"
          rows="1"
          placeholder="Enter the Author Name."
        />
        <button className={styles.btn}>Create An Article</button>
      </div>
    </div>
  );
};

export default CreateArticle;
