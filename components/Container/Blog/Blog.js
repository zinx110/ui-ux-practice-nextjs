import Image from "next/image";
import styles from "./Blog.module.css";
import blog01 from "/public/assets/blog1.png";
import blog02 from "/public/assets/blog02.png";
import blog03 from "/public/assets/blog03.png";
import blog04 from "/public/assets/blog04.png";
import blog05 from "/public/assets/blog05.png";

const Blog = () => {
  return (
    <div className={`${styles.gpt3_blog} section_padding`} id="blog">
      <div className={styles.gpt3_blog_heading}>
        <h1 className="gradient_text">
          A lot is happening. We are blogging about it
        </h1>
      </div>
      <div className={styles.gpt3_blog_container}>
        <div className={styles.gpt3_blog_container_groupA}>
          <Article
            imgUrl={blog01}
            date="Sep 26, 2021"
            title="GPT-3 and Open AI is the future. Let us explore how it is!"
          />
        </div>
        <div className={styles.gpt3_blog_container_groupB}>
          <Article
            imgUrl={blog02}
            date="June 22, 2021"
            title="GPT-3 and Open AI is the future. Let us explore how it is!"
          />
          <Article
            imgUrl={blog03}
            date="Sep 19, 2021"
            title="GPT-3 and Open AI is the future. Let us explore how it is!"
          />
          <Article
            imgUrl={blog04}
            date="Aug 10, 2021"
            title="GPT-3 and Open AI is the future. Let us explore how it is!"
          />
          <Article
            imgUrl={blog05}
            date="Aug 01, 2021"
            title="GPT-3 and Open AI is the future. Let us explore how it is!"
          />
        </div>
      </div>
    </div>
  );
};

const Article = ({ imgUrl, date, title }) => (
  <div className={styles.gpt3_blog_container_article}>
    <div className={styles.gpt3_blog_container_article_image}>
      <Image src={imgUrl} alt="blog" layout="responsive" />
    </div>
    <div className={styles.gpt3_blog_container_article_content}>
      <div>
        <p>{date}</p>
        <h3>{title}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
);

export default Blog;
