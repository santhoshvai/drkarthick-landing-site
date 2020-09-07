import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

type AboutRollProps = {
  data: Data;
};
type Data = {
  markdownRemark: MarkdownRemark;
};
type MarkdownRemark = {
  frontmatter: Frontmatter;
};

interface Frontmatter {
  title: string;
  summary: string;
  profilepicture: string;
}

const truncateString = (string: string, maxLength = 50) => {
  if (string.length <= maxLength) return string;
  return `${string.substring(0, maxLength)}...`;
};

function AboutRoll(props: AboutRollProps) {
  const { summary, profilepicture } = props.data.markdownRemark.frontmatter;
  const imageStyle = {
    float: "left",
    "margin-right": "10px",
    width: "200px",
    overflow: "hidden",
  };

  return (
    <div className="column is-12">
      <div className={`blog-list-item tile is-child box notification`}>
        <div className="column is-12 has-text-centered">
          <h2>About Dr. Karthick Vaiyapuri</h2>
        </div>
        <PreviewCompatibleImage
          imageInfo={{
            image: profilepicture,
            alt: `profile picture of Dr. Karthick Vaiyapuri`,
            style: imageStyle,
          }}
        />
        <p className="subtitle is-size-5" style={{ whiteSpace: "pre-wrap" }}>
          {truncateString(summary, 900)}
        </p>
        <div className="column is-12 has-text-centered">
          <Link className="button" to="/about">
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default () => (
  <StaticQuery
    query={graphql`
      query AboutRollQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
          frontmatter {
            title
            summary
            profilepicture {
              childImageSharp {
                fluid(maxWidth: 190, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data: Data) => <AboutRoll data={data} />}
  />
);
