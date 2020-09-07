import React, { useMemo } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

type AboutPageTemplateProps = {
  title: string;
  content?: string | null;
  summary: string;
  profilepicture: string;
  contentComponent: Function;
};

export const AboutPageTemplate = ({
  title,
  content,
  contentComponent,
  profilepicture,
  summary,
}: AboutPageTemplateProps) => {
  const PageContent = contentComponent || Content;

  const imageStyle: React.CSSProperties = {
    float: "left",
    marginRight: "10px",
    width: "200px",
    overflow: "hidden",
    marginBottom: "10px",
  };

  const nbspUnicodedSummary = useMemo(
    () => summary.replace(/&nbsp;/g, "\u00a0"),
    [summary]
  );

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-1 has-text-weight-bold is-bold-light">
                {title}
              </h2>

              <PreviewCompatibleImage
                imageInfo={{
                  image: profilepicture,
                  alt: `profile picture of Dr. Karthick Vaiyapuri`,
                  style: imageStyle,
                }}
              />
              <p className="is-size-5" style={{ whiteSpace: "pre-wrap" }}>
                {nbspUnicodedSummary}
              </p>
              <PageContent className="content" content={content} />
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

type AboutPageProps = {
  data: Data;
};
type Data = {
  markdownRemark: MarkdownRemark;
};
type MarkdownRemark = {
  html: string;
  frontmatter: Frontmatter;
};

type Frontmatter = {
  title: string;
  summary: string;
  profilepicture: string;
};

const AboutPage = ({ data }: AboutPageProps) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        summary={post.frontmatter.summary}
        profilepicture={post.frontmatter.profilepicture}
        content={post.html}
      />
    </Layout>
  );
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
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
`;
