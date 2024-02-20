import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "All about me",
};


const AboutPage = () => {

  // console.log("lets check where it works")
  return (
    <div className="flex pl-10">
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}></h2>
        <h1 className={styles.title}>
          Hello, I am Shawn a web developer that has the passion to create a website specifically for you.
        </h1>
        <p className={styles.desc}></p>
        Contact me at reutershawn45@gmail.com for a quote, and I will respond with what I think would best fit your needs and we will work through that together.
        <div className="flex justify-between pl-10">

          <div className={styles.box}>
            <h1>Next.js</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>3 happy customers</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className=" flex-1 relative pl-30 pt-10 pl-20 ">
        <Image
          src="/azul.jpg"
          alt="About Image"
          className="bbject-contain"
          height={500}
          width={500}
        />
      </div>
    </div>
  );
};

export default AboutPage;