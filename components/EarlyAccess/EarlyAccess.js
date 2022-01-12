import styles from "./EarlyAccess.module.css";
const EarlyAccess = () => {
  return (
    <div className={`${styles.gpt3_earlyaccess} section_padding`}>
      <div className={styles.gpt3_footer_heading}>
        <h1 className="gradient_text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className={styles.gpt3_footer_btn}>
        <p>Request Early Access</p>
      </div>
    </div>
  );
};

export default EarlyAccess;
