import styles from "../styles/Navigation.module.css";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className={styles.nav}>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/services">
          <li>Services</li>
        </Link>
        <Link href="/blog">
          <li>Blogs</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navigation;
