import Link from "next/link";
import styles from "../styles/Navigation.module.css";
import Button from "../components/Button";

const Navigation = () => {
  const inner_left_nav = {
    height: "40px",
    textDecoration: "none",
  };
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_wrapper}>
        <div className={styles.left_nav}>
          <Link href="/" style={inner_left_nav}>
            <img
              src="/assets/main-logo.png"
              alt="logo"
              className={styles.logo_wrap}
            />
          </Link>
        </div>
        <div className={styles.right_nav}>
          <Link href="/all-corses">
            <Button text="COURSES" />
          </Link>
          <Link href="/blogs">
            <Button text="BLOGS" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
