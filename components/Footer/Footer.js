import styles from "./Footer.module.css";
import gpt3Logo from "/public/assets/logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={`${styles.gpt3_footer} section_padding`}>
      <div className={styles.gpt3_footer_links}>
        <div className={styles.gpt3_footer_links_logo}>
          <div className={styles.img}>
            <Image src={gpt3Logo} alt="gpt3" />
          </div>
          <p>
            Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
          </p>
        </div>
        <div className={styles.gpt3_footer_links_div}>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className={styles.gpt3_footer_links_div}>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className={styles.gpt3_footer_links_div}>
          <h4>Get in touch</h4>
          <p>
            Inazuma Hall, Road #4, Block #7, 182 Bleecker Street, London, UK
          </p>
          <p>+880-1752-810072</p>
          <p>tasdid110@gmail.com</p>
        </div>
      </div>
      <div className={styles.gpt3_footer_copyright}>
        <p>2021 GPT-3. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
