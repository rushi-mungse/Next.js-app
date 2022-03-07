import styles from "../styles/Navigation.module.css";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className={styles.nav}>
      <ul>
        <Link href="/">
          <li>Articles</li>
        </Link>
        <Link href="/books">
          <li>Books</li>
        </Link>
        <Link href="/workshop">
          <li>Workshop</li>
        </Link>
        <Link href="/create-article">
          <li>Create Article</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navigation;
