import Image from "next/image";
import styles from "./VRSection.module.css";
import VRSectionImage from "/public/assets/possibility-img.png";

const VRSection = () => {
  return (
    <div className={`${styles.gpt3_VRSection} section_padding`} id="VRSection">
      <div className={styles.gpt3_VRSection_image}>
        <div className={styles.img}>
          <Image src={VRSectionImage} alt="VRSection" />
        </div>
      </div>
      <div className={styles.gpt3_VRSection_content}>
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
        <h4>Register Now...</h4>
      </div>
    </div>
  );
};

export default VRSection;
