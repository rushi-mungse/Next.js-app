import styles from "../styles/TextareaBox.module.css";
const TextareaBox = ({ labelName, placeholder, rows }) => {
  return (
    <div className={styles.inputBox}>
      <label htmlFor="articleTopic">{labelName} :</label>
      <textarea type="text" placeholder={placeholder} rows={rows}></textarea>
    </div>
  );
};

export default TextareaBox;
