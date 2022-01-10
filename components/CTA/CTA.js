import styles from "./CTA.module.css";

const CTA = () => {
  return (
    <div className={styles.gpt3_cta}>
      <div className={styles.gpt3_cta_content}>
        <p>Request Early Access to Get Started</p>
        <h3>Register Today & start exploring the endless possibilities.</h3>
      </div>
      <div className={styles.gpt3_cta_btn}>
        <button type="button">Get Started</button>
      </div>
    </div>
  );
};

export default CTA;
