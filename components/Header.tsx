import Link from "next/link";
import styles from "../styles/Header.module.css";

export function Header(): JSX.Element {
  return (
    <header className={styles.Header}>
      <div className={styles.Header_Inner}>
        <Link href="/">
          <a href="#" className={styles.Title}>
            <span className={styles.Title_Icon}>📨</span>
            <div className={styles.Title_Text}>Contact</div>
          </a>
        </Link>
        <div className={styles.Link}>
          <a
            href="https://github.com/Newt-Inc/newt-blog-starter-nextjs"
            rel="noreferrer noopener"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
