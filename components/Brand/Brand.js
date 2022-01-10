import Image from "next/image";
import styles from "./Brand.module.css";
import google from "../../public/assets/google.png";
import slack from "../../public//assets/slack.png";
import atlassian from "../../public//assets/atlassian.png";
import dropbox from "../../public//assets/dropbox.png";
import shopify from "../../public//assets/shopify.png";

const Brand = () => {
  return (
    <div className={`${styles.gpt3_brand} section_padding`}>
      <div>
        <div className={styles.img}>
          <Image src={google} alt="google" />
        </div>
      </div>
      <div>
        <div className={styles.img}>
          <Image src={slack} alt="slack" />
        </div>
      </div>
      <div>
        <div className={styles.img}>
          <Image src={atlassian} alt="atlassian" />
        </div>
      </div>
      <div>
        <div className={styles.img}>
          <Image src={dropbox} alt="dropbox" />
        </div>
      </div>
      <div>
        <div className={styles.img}>
          <Image src={shopify} alt="shopify" />
        </div>
      </div>
    </div>
  );
};

export default Brand;
