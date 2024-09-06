import styles from "../home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h3>Inside Company</h3>
          <ul>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
            <li>
              <a href="#">Top Technologies</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3>Link</h3>
          <ul>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Other</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2024 Tboss Software Foundations. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
