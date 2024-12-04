import React, { useEffect, useState } from "react";

import "./Blog.css";
import Section from "../../components/Section";
import BlogCard from "../../components/blog/BlogCard";
import { useFetch } from "../../hooks/useFetch";
import checkColor from "../../components/projects/checkColor";
import ArticlesTags from "../../components/ArticlesTags";
import BlogCardSkeleton from "../../components/blog/BlogCardSkeleton";
import { ShowMoreButton } from "../../components/Buttons/ShowMoreButton";

import URL from "../../api/URL";

// const Blog = () => {
  const [url, setUrl] = useState(URL + "/articles/");

  const [filterTags, setFilterTags] = useState([]);

  const { data: articles, isPending, error } = useFetch(url);

  const queryArticles = async (query) => {
    setUrl(`${URL}/articles/?${query}`);
  };


    <Section
      className="blog"
      icon="uil uil-files-landscapes-alt"
      sectionTitle="Blog"
      sectionSubtitle="all articles"
    >
      <ArticlesTags tagName={filterTags.sort()} queryArticles={queryArticles} />
      {articles &&
        articles.map((project) => {
          return (
            project &&
            project.tags.map((tag) => {
              return (
                !filterTags.includes(tag) && setFilterTags([...filterTags, tag])
              );
            })
          );
        })}

      <article className="articles__container container">
        {isPending && <BlogCardSkeleton cards={8} />}
        {error && <div>{error} .....</div>}
        {articles &&
          articles.map(
            ({
              _id: id,
              title,
              description,
              imgUrl,
              publishedDate,
              slug,
              tags,
              readTime,
            }) => {
              return (
                <BlogCard
                  title={title}
                  description={description.substring(0, 140) + "..."}
                  publishedDate={publishedDate}
                  tags={tags.map((tag, i) => {
                    return (
                      <ShowMoreButton
                        style={{
                          padding: "0.5rem",
                          margin: "5px",
                          color: "var(--main-color)",
                          boxShadow: "none",
                        }}
                        title={`#${tag}`}
                      />
                    );
                  })}
                  image={imgUrl}
                  id={id}
                  link={"/blog/" + slug}
                  readTime={`${readTime} min`}
                />
              );
            }
          )}
      </article>
    </Section>
  );
};

// export default Blog;
