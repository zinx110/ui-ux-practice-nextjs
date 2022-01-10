import styles from "./Features.module.css";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Message or am nothing",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    title: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..",
  },
];

const Features = () => {
  return (
    <div className={`${styles.gpt3_features} section_padding`} id="features">
      <div className={styles.gpt3_features_heading}>
        <h1 className="gradient_text">
          The Future is Now and You Just Need to Realize It. Step into Future
          Today. & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className={styles.gpt3_features_container}>
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

const Feature = ({ title, text }) => {
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

export default Features;
