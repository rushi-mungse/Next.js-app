import Animation from "../components/Animation";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // const navigate = useNavigate();
  const redirectToRegister = () => {
    // navigate("/register");
  };
  return (
    <div className={styles.home_wrap}>
      <Animation text="This is wonderful application for learning and growing our skills !" />
      <div className={styles.content_wrap}>
        <img src="/assets/teach-to-any.png" alt="teach-to-any" />
        <div className={styles.inner_content}>
          <h1>Welcome To teachToany!</h1>
          <p className={styles.para}>
            teachToany makes it clear what visitors should do. They can sign in
            or register an account. Here, we have more navigation options than
            Dropbox provides, but each contributes to helping visitors find what
            they want.
          </p>
          <Button text="Register Now" onClick={redirectToRegister} />
          <p className={styles.url_signin}>
            Already using teachToany? <Link href="/sign-in">sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
