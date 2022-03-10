import styles from "../styles/Button.module.css";
const Button = ({ text, img, onClick }) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      <span className={styles.text_wrap}>{text}</span>
      {img && <img src={`/images/{img}.png`} alt="button-img" />}
    </button>
  );
};

export default Button;
