import styles from "./home.module.css";
import Image from "next/image";
import profilePic1 from "../public/tboss.png";
import profilePic2 from "../public/yessslogo.jpg";

// components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      {/* <Header /> */}
      <div className={styles.bottomHeader}>
        <p>Tboss Software Foundations</p>
        <h4>
          The TBOss Software Foundation is a non-profit organization dedicated
          to advancing the development and adoption of open-source software. It
          focuses on creating and supporting high-quality, community-driven
          software projects, fostering collaboration among developers, and
          promoting best practices in software development. The foundation often
          provides resources, infrastructure, and guidance to help projects
          succeed and to encourage innovation within the open-source community.
        </h4>
        <br />
        <Image
          className={styles.img}
          src={profilePic1}
          alt="Picture of the author"
          width={600}
          height={600}
        />
        <br />
      </div>

      <div className={styles.bottomHeader1}>
        <p>Tboss About</p>
        <h4>
          The TBOss Software Foundation is a non-profit organization dedicated
          to advancing the development and adoption of open-source software. It
          focuses on creating and supporting high-quality, community-driven
          software projects, fostering collaboration among developers, and
          promoting best practices in software development. The foundation often
          provides resources, infrastructure, and guidance to help projects
          succeed and to encourage innovation within the open-source community.
        </h4>
      </div>

      <div className={styles.bottomHeader2}>
        <p>Tboss Information</p>
        <h4>
          The TBOss Software Foundation is a non-profit organization dedicated
          to advancing the development and adoption of open-source software. It
          focuses on creating and supporting high-quality, community-driven
          software projects, fostering collaboration among developers, and
          promoting best practices in software development. The foundation often
          provides resources, infrastructure, and guidance to help projects
          succeed and to encourage innovation within the open-source community.
        </h4>
        <br />
        <Image
          className={styles.img}
          src={profilePic2}
          alt="Picture of the author"
          width={600}
          height={600}
        />
        <br />
      </div>

      <Footer />
    </div>
  );
}
