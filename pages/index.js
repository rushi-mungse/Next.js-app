import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
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
      <h1>Welcome to Hunting coders blogs.</h1>
    </div>
  );
}
