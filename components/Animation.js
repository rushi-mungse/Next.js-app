import styles from "../styles/Animation.module.css";
const Animation = ({ text }) => {
  console.log(text);
  return (
    <div className={styles.animation_wrap}>
      <div className={styles.animated_img}>
        <img src="/assets/logo.png" alt="logo" />
      </div>
      <span>{text}</span>
    </div>
  );
};

export default Animation;
