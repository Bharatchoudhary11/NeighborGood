import React from "react";
import "./NewsBlock.css";

const NewsBlock = ({ imageurl, title, summary, author, viewmore }) => {
  return (
    <div className="newsblock">
      <div className="left">
        {imageurl && <img src={imageurl} alt={title} className="news-image" />}
      </div>
      <div className="right">
        <h2 className="news-title">{title}</h2>
        <p className="news-summary">{summary}</p>
        {author && <p className="news-author">By: {author}</p>}
        <a
          href={viewmore}
          target="_blank"
          rel="noopener noreferrer"
          className="view-more"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsBlock;
