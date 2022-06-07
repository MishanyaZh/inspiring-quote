import React from "react";

const Author = ({ author }) => {
  console.log(author);
  return (
    <div>
      <img src={author.photo.url} alt={author.name} />
      <h2>{author.name}</h2>
    </div>
  );
};

export default Author;
