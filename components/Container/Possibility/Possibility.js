import Image from "next/image";
import styles from "./Possibility.module.css";
import possibilityImage from "/public/assets/possibility.png";

const Possibility = () => {
  return (
    <div
      className={`${styles.gpt3_possibility} section_padding`}
      id="possibility"
    >
      <div className={styles.gpt3_possibility_image}>
        <div className={styles.img}>
          <Image src={possibilityImage} alt="possibility" />
        </div>
      </div>
      <div className={styles.gpt3_possibility_content}>
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient_text">
          The possibilities are <br /> beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
