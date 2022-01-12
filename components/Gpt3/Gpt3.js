import styles from "./WHATGPT3.module.css";

const WHATGPT3 = () => {
  return (
    <div className={`${styles.gpt3_whatgpt3} section_margin`} id="whatgpt3">
      <div className={styles.gpt3_whatgpt3_feature}>
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          head
        />
      </div>
      <div className={styles.gpt3_whatgpt3_heading}>
        <h1 className="gradient_text">
          The Possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className={styles.gpt3_whatgpt3_container}>
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  );
};

const Feature = ({ title, text, head }) => {
  return (
    <div className={styles.gpt3_features_container_feature}>
      <div className={styles.gpt3_features_container_feature_title}>
        <div></div>
        <h1>{title}</h1>
      </div>
      <div className={styles.gpt3_features_container_feature_text}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default WHATGPT3;
