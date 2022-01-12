import Image from "next/image";
import styles from "./Header.module.css";
import people from "/public/assets/people.png";
import ai from "/public/assets/aipic.png";

const Header = () => {
  return (
    <div className={`${styles.gpt3_header} section_padding`} id="home">
      <div className={styles.gpt3_header_content}>
        <h1 className="gradient_text">
          {`Let's Build Something amazing with GPT-3 Open-AI`}
        </h1>

        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className={styles.gpt3_header_content_input}>
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className={styles.gpt3_header_content_people}>
          <div className={styles.img}>
            <Image src={people} alt="people" layout="responsive" />
          </div>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className={styles.gpt3_header_image}>
        <div className={styles.img}>
          <Image src={ai} alt="ai" layout="responsive" />
        </div>
      </div>
    </div>
  );
};

export default Header;
