// pages/contact.js
import Head from "next/head";
import styles from "../contact.module.css";

// components
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Contact us for any inquiries or support"
        />
      </Head>
      <main>
        <Navbar />
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.p}>
          If you have any questions or need support, feel free to reach out to
          us through the following channels:
        </p>

        <section className={styles.section}>
          <h2>Email</h2>
          <p>
            For general inquiries, email us at:{" "}
            <a className={styles.link} href="mailto:joey@tech-center.com">
              joey@tech-center.com
            </a>
          </p>
        </section>

        <section className={styles.section}>
          <h2>Social Media</h2>
          <p>Follow us on:</p>
          <ul className={styles.socialMediaList}>
            <li>
              <a
                className={styles.link}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
