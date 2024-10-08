import Head from "next/head";
import styles from "../pages.module.css";

// components
import Navbar from "@/app/components/Navbar";

export default function Support() {
  return (
    <>
      <Head>
        <title>Tboss Support</title>
        <meta
          name="description"
          content="Support page for assistance and inquiries."
        />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Support Page</h1>
        <p className={styles.description}>
          If you need assistance, please contact us through the following
          methods:
        </p>
        <p className={styles.description}>
          Our support team is available Monday to Friday, 9 AM to 5 PM (PST). We
          strive to respond to all inquiries within 24 hours.
        </p>
      </div>
    </>
  );
}
