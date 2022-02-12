import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.nav}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Servises</li>
        <li>Blogs</li>
      </ul>
      <h1>Welcome to Hunting coders blogs.</h1>
    </div>
  );
}
