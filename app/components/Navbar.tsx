import Link from "next/link";
import React from "react";
import styles from "../home.module.css";

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <p className={styles.title}>Tboss</p>
        </li>
        <li>
          <Link className={styles.links} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.links} href="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className={styles.links} href="/support">
            Support
          </Link>
        </li>
        <li>
          <Link className={styles.links} href="/openchat">
            OpenChat
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
