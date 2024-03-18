import "./BlogCard.css";
import StyledTitle from "../../components/StyledTitle";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const BlogCard = ({
  link,
  id,
  image,
  title,
  description,
  tags,
  publishedDate,
  readTime,
}) => {
  const newDate = new Date(publishedDate);

  return (
    <motion.article
      key={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, transition: 0.4 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <Link to={link}>
        <div className="article">
          <img className="article__image" src={image} alt={title} />
          <div className="article__data">
            <StyledTitle>{title}</StyledTitle>
            <p>{description}</p>
            <div className="article__tags">{tags}</div>
            <div className="article__data-dates">
              <span className="article__data-date">
                <i className="uil uil-calendar-alt"></i>
                {publishedDate &&
                  `${newDate.getMonth()} ${newDate.getFullYear()}`}
              </span>
              <span>
                <i className="uil uil-clock"></i>
                {readTime}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
